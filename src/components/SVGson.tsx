import React from "react";
import { stringify } from "svgson";

const SVGson = ({ url }: { url: string }) => {
	const [svg, setSvg] = React.useState<string>();
	React.useEffect(() => {
		console.log("refresh");
		const parseSvg = async () => {
			const svgFile = await fetch(url);
			const svgText = await svgFile.json();
			const svgJson = stringify(svgText);
			setSvg(svgJson);
		};
		parseSvg();
	}, [url]);

	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: svg || "" }} />
		</div>
	);
};

export default SVGson;
