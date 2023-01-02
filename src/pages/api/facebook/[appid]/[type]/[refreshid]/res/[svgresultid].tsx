import type { NextApiRequest, NextApiResponse } from "next";
import { optimize } from "svgo";

import path from "path";

import { readFileSync } from "fs";

import { INode, parse, stringify } from "svgson";
import { find, flattenDeep } from "lodash";

import { toPairs } from "lodash";
import satori from "satori";
import { getKasmet } from "@/components/hooks/facebookhook";

type Replacement = {
	lookforid: string;
	replacewith: string;
};

type Wrapper = {
	id: string;
	width: number;
	replacewith: string;
	fontSize: number;
	color: string;
	height: number;
	letterSpacing: number;
	rectY: number;
	rectX: number;
	lineHeight?: number;
};

function collectChildren(obj: INode): INode[] {
	if (obj.children) {
		return [obj, ...flattenDeep(obj.children.map(collectChildren))];
	} else {
		return [obj];
	}
}

async function replaceTextSvg(data: string, replacements: Replacement[]) {
	const svg = await parse(data);

	const key1 = svg.children.length - 1;
	const key2 = svg.children[key1].children.length - 1;
	const lastGrandchild = svg.children[key1].children[key2];
	const rects = collectChildren(lastGrandchild).filter(
		(x) => x.name === "rect"
	);
	const texts = [] as Wrapper[];

	//svg.attributes.width = "100%";
	//svg.attributes.height = "100%";
	replacements.forEach(({ lookforid, replacewith }) => {
		lastGrandchild.children.forEach((element) => {
			if (element.name === "text" && element.attributes.id === lookforid) {
				const wrapper = find(rects, (obj) => obj.attributes.id === lookforid);

				const fontSize = Number(element.attributes["font-size"]);
				const rectX = Number(wrapper?.attributes.x);
				const rectY = Number(wrapper?.attributes.y);
				const letterSpacing = Number(element.attributes["letter-spacing"]);
				const color = element.attributes["fill"];

				const width = Number(wrapper?.attributes.width);
				const height = Number(wrapper?.attributes.height);

				texts.push({
					id: lookforid,
					width,
					height,
					color,
					letterSpacing,
					rectY,
					rectX,
					fontSize,
					replacewith,
				});

				svg.children[key1].children[key2] = {
					name: "text", // was text
					type: "element",
					value: "",
					attributes: element.attributes,
					children: [],
				};
			}
		});
	});
	const result = optimize(stringify(svg));
	const svgopt = result.data.replace(
		"<svg ",
		'<svg viewBox="' + svg.attributes.viewBox + '" '
	);

	return Promise.resolve({
		svg: svgopt,
		texts,
		w: Number(svg.attributes.width.replace("px", "")),
		h: Number(svg.attributes.height.replace("px", "")),
	});
}

function templateEngine(template: string, data: Params) {
	const pattern = /{\s*(\w+?)\s*}/g; // {property}
	return template.replace(pattern, (_, token) => data[token] || "");
}

export function returnStyles(text: Wrapper): { [key: string]: string | number } {
	return {
		display: "flex",
		position: "absolute",
		top: text.rectY,
		left: text.rectX,
		width: text.width,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		fontSize: text.fontSize,
		color: text.color,
		lineHeight: 0.94,
		padding: 0,
		margin: 0,
		height: text.height,
	};
}

export function returnStylesOg(text: Wrapper): {
	text: string;
	id: string;
	style: {
		[key: string]: string | number;
	};
} {
	return {
		text: text.replacewith,
		id: text.id,
		style: {
			display: "flex",
			position: "absolute",
			top: Math.ceil(text.rectY),
			left: Math.ceil(text.rectX),
			width: text.width,
			justifyContent: "center",
			alignContent: "center",
			alignItems: "center",
			fontSize: text.fontSize,
			color: text.color,
			lineHeight: 0.94,
			padding: 0,
			margin: 0,
			height: text.height,
		},
	};
}

type Params = {
	[key: string]: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	res.setHeader("Expires", "0");
	const rootfolder = __dirname.split(".next")[0];
	let additional;

	const { svgresultid, appid, type, refreshid } = req.query as Params;

	const ff = path.resolve(rootfolder, `public/images/font/Nunito-Medium.ttf`);
	const filePath = path.resolve(rootfolder, `public/fbapps/${appid}/svg.svg`);
	const res2 = path.resolve(rootfolder, `public/fbapps/${appid}/items.json`);

	const svgstring = readFileSync(filePath).toString();
	const items = JSON.parse(readFileSync(res2).toString());
	const result = items[svgresultid];
	const params = req.query as Params;

	if (refreshid.length > 5) {
		const checkadditional = await getKasmet(refreshid.replace(".png", ""));
		additional = checkadditional;
	}
	const template = JSON.parse(
		templateEngine(JSON.stringify(result), additional || params)
	);

	const data = toPairs({
		...template,
		...params,
		date: new Date().toISOString().split("T")[0],
	}).map((pair) => ({
		lookforid: pair[0],
		replacewith: pair[1],
	})) as { lookforid: string; replacewith: string }[];

	const rendered = await replaceTextSvg(svgstring, data);
	if (type === "svg") {
		res.setHeader("Content-Type", "image/svg+xml");
		const svgx = await satori(
			<div style={{ display: "flex" }}>
				{rendered.texts.map((text) => (
					<div key={text.id} style={returnStyles(text)}>
						{text.replacewith}
					</div>
				))}
			</div>,
			{
				width: rendered.w,
				height: rendered.h,
				fonts: [
					{
						name: "Nunito Medium",
						data: readFileSync(ff),
						weight: 400,
						style: "normal",
					},
				],
			}
		);
		res.end(svgx);
	} else {
		res.json(rendered.texts.map((item) => returnStylesOg(item)));
	}
}
//
