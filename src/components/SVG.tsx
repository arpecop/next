import React, { useEffect, useState } from "react";

import svgson from "svgson";

type Replacement = {
	lookforid: string;
	replacewith: string;
};

function TextReplacer({
	filename,
	replacements,
}: {
	filename: string;
	replacements: Replacement[];
}) {
	const [svg, setSvg] = useState<any>();

	async function replaceText(data: string, replacements: Replacement[]) {
		return new Promise((resolve) => {
			svgson.parse(data).then((svg) => {
				let tmp = svg;

				//console.log(JSON.stringify(json, null, 2));
				console.log("ORIGINAL", svg.children[1].children[2].children[0]);

				replacements.forEach(({ lookforid, replacewith }) => {
					svg.children[1].children.forEach((element, i) => {
						if (
							element.name === "text" &&
							element.attributes.id === lookforid
						) {
							console.log(element.children[0].attributes);
							element = {
								name: "text",
								type: "element",
								value: "",
								attributes: element.attributes,
								children: [
									{
										name: "tspan",
										type: "element",
										value: "",
										attributes: element.children[0].attributes,
										children: [
											{
												name: "",
												type: "text",
												value: replacewith,
												attributes: {},
												children: [],
											},
										],
									},
								],
							};
							tmp.children[1].children[i] = element;
						}
					});
				});

				console.log("UPDATEDx", tmp.children[1].children[2].children[0]);

				resolve({ svg: svgson.stringify(tmp) });
			});
		});
		//const updatedSvg = svgson.stringify(svg);
	}

	useEffect(() => {
		const parser = async () => {
			const svgparser = (await replaceText(filename, replacements)) as {
				svg: string;
			};

			setSvg(svgparser.svg);
		};
		parser();
	}, []);

	// Parse the SVG file as a string
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: svg }} />
			{svg}
		</div>
	);
}

export default TextReplacer;
