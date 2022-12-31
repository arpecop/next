import React from "react";

import { convertSVGToPNGUrl } from "svg-to-png-browser";

const SVGson = ({ url }: { url: string }) => {
	const [svgurl, setSvgurl] = React.useState<string>();
	React.useEffect(() => {
		const parseSvg = async () => {
			const svgFile = await fetch(url);
			const svgText = await svgFile.text();
			const pngUrl = await convertSVGToPNGUrl(svgText);
			setSvgurl(pngUrl);
		};
		parseSvg();
	}, [url]);

	return (
		<img src={svgurl} alt="" width="640" height="336" style={{ maxWidth: 640 }} />
	);
};

export default SVGson;
