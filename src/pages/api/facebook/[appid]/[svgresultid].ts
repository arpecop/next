import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";
import wrapText from "wrap-text";

import { INode, parse, stringify } from "svgson";
import { find, flattenDeep } from "lodash";
import { doQuery, gql } from "../../graphql";
import { toPairs } from "lodash";
import satori from "satori";

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
	const letters = Math.round(width / fsize) * 1.9;

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

	return arr;
}

function collectChildren(obj: INode): INode[] {
	if (obj.children) {
		return [obj, ...flattenDeep(obj.children.map(collectChildren))];
	} else {
		return [obj];
	}
}

async function replaceTextSvg(data: string, replacements: Replacement[]) {
	//const clean = data.replace(/<g[^>]*">/g, "").replace(/<\/g>/g, "").replace(/<title[^>]*>([^<]*)<\/title>/g, "");
	const svg = await parse(data);

	const key1 = svg.children.length - 1;
	const key2 = svg.children[key1].children.length - 1;
	const lastGrandchild = svg.children[key1].children[key2];
	const rects = collectChildren(lastGrandchild).filter(
		(x) => x.name === "rect"
	);

	svg.attributes.width = "100%";
	svg.attributes.height = "100%";
	replacements.forEach(({ lookforid, replacewith }) => {
		lastGrandchild.children.forEach((element) => {
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

				svg.children[key1].children[key2] = {
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

function templateEngine(template: string, data: { [key: string]: string }) {
	const pattern = /{\s*(\w+?)\s*}/g; // {property}
	return template.replace(pattern, (_, token) => data[token] || "");
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.setHeader("Content-Type", "image/svg+xml");

	console.log(req.query);
	const { svgresultid, appid, firstname } = req.query as { [key: string]: string };
	console.log(req.query);
	const fontbuff = path.resolve(
		__dirname,
		`../../../../../../public/images/font/Nunito-Medium.ttf`
	);

	const filePath = path.resolve(
		__dirname,
		`../../../../../../public/fb/${appid}/svgindex.svg`
	);
	const svgstring = fs.readFileSync(filePath).toString();

	// result

	const resx = await doQuery(
		gql`
      query MyQuery($id: String!) {
        single: getDdb(id: $id) {
          id
          data
        }
      }
    `,
		{
			id: svgresultid,
		}
	);

	const data = toPairs(JSON.parse(templateEngine(resx.data, { firstname }))).map(
		(pair) => ({
			lookforid: pair[0],
			replacewith: pair[1],
		})
	) as { lookforid: string; replacewith: string }[];

	const rendered = await replaceTextSvg(svgstring, data);

	res.end(rendered.svg);
}

//test
