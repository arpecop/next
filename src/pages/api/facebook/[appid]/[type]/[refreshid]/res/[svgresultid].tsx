import type { NextApiRequest, NextApiResponse } from "next";
import { optimize } from "svgo";

import path from "path";

import { readFileSync } from "fs";

import { INode, parse, stringify } from "svgson";
import { find, flattenDeep } from "lodash";

import { toPairs } from "lodash";
import satori from "satori";

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
				const lineHeight = Number(element.attributes["line-spacing"]);
				const width = Number(wrapper?.attributes.width);
				const height = Number(wrapper?.attributes.height);

				texts.push({
					id: lookforid,
					width,
					height,
					color,
					letterSpacing,
					lineHeight,
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
type Params = {
	[key: string]: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.setHeader("Content-Type", "image/svg+xml");
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	res.setHeader("Expires", "0");
	const rootfolder = __dirname.split(".next")[0];
	console.log(rootfolder);

	const { svgresultid, appid, type, refreshid } = req.query as Params;

	const ff = path.resolve(rootfolder, `public/images/font/Nunito-Medium.ttf`);

	const filePath = path.resolve(rootfolder, `public/fbapps/${appid}/svg.svg`);
	const svgstring = readFileSync(filePath).toString();

	const res2 = await fetch(`https://kloun.lol/fbapps/${appid}/items.json`);
	const items = await res2.json();

	const result = items[svgresultid || refreshid];

	const params = req.query as Params;
	const data = toPairs(
		JSON.parse(templateEngine(JSON.stringify(result), params))
	).map((pair) => ({
		lookforid: pair[0],
		replacewith: pair[1],
	})) as { lookforid: string; replacewith: string }[];

	const rendered = await replaceTextSvg(svgstring, data);
	if (type === "svg") {
		const svgx = await satori(
			<div style={{ display: "flex" }}>
				{rendered.texts.map((text) => (
					<div
						key={text.id}
						style={{
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
						}}
					>
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
		res.end(rendered.svg);
	}
}
