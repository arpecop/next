import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";
import wrapText from "wrap-text";

import { INode, parse, stringify } from "svgson";
import { find, flattenDeep } from "lodash";

type Replacement = {
	lookforid: string;
	replacewith: string;
};

type Wrapper = {
	width: number;
	replacewith: string;
	fontSize: number;
	letterSpacing: number;
	rectY: number;
	rectX: number;
};

function wrapTextr({
	width,
	replacewith,
	fontSize,
	letterSpacing,
	rectY,
	rectX,
}: Wrapper): INode[] {
	const fsize = fontSize + letterSpacing;
	const letters = Math.round(width / fsize) * 2;

	const wrappedText = wrapText(replacewith, letters).split("\n");

	const arr = wrappedText.map((line, i) => ({
		name: "tspan",
		type: "element",
		value: "",
		attributes: {
			x: rectX.toString(),
			y: (rectY + fontSize * i).toString(),
		},
		children: [
			{
				name: "",
				type: "text",
				value: line,
				attributes: {},
				children: [],
			},
		],
	}));

	return arr as any;
}

async function replaceTextSvg(data: string, replacements: Replacement[]) {
	const svg = await parse(data);
	const rects = flattenDeep(svg.children[1].children).filter(
		(x) => x.name === "rect"
	);
	replacements.forEach(({ lookforid, replacewith }) => {
		svg.children[1].children.forEach((element, i) => {
			if (element.name === "text" && element.attributes.id === lookforid) {
				const wrapper = find(rects, (obj) => obj.attributes.id === lookforid);
				const fontSize = Number(element.attributes["font-size"]);
				const rectX = Number(wrapper?.attributes.x);
				const rectY = Number(wrapper?.attributes.y) + fontSize;
				const letterSpacing = Number(element.attributes["letter-spacing"]);
				const width = Number(wrapper?.attributes.width);

				const d = wrapTextr({
					width,
					letterSpacing,
					rectY,
					rectX,
					fontSize,
					replacewith,
				});

				svg.children[1].children[i] = {
					name: "text",
					type: "element",
					value: "",
					attributes: element.attributes,
					children: d,
				};
			}
		});
	});
	return Promise.resolve({ svg: stringify(svg), json: svg });
}

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	res.setHeader("Content-Type", "image/svg+xml");

	const filePath = path.resolve(
		__dirname,
		"../../../../../../public/Artboard.svg"
	);
	const value = fs.readFileSync(filePath);

	const rendered = await replaceTextSvg(value.toString(), [
		{
			lookforid: "text-1",
			replacewith: "Lorem vitae quasi quaerat",
		},
		{
			lookforid: "text-2",
			replacewith:
				"Lorem vitae quasi quaerat et consectetur quis ea! Eos unde repellendus soluta eaque accusamus deserunt maiores? Facere nihil architecto facilis fuga quidem? Nostrum animi consectetur quis atque architecto totam molestias",
		},
		{
			lookforid: "text-3",
			replacewith:
				"emperor vitae quasi на втори ред а това може би отива на трети",
		},
	]);

	res.end(rendered.svg);
}
