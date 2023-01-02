import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { returnStyles } from "./res/[svgresultid]";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
	const params = req.url
		.split("?")[0]
		.split("/")
		.reverse()
		.filter((x: string) => x.length > 3);

	const newid = params[0].split("_");
	console.log(
		`${params[3]}//${params[2]}/api/facebook/${params[1]}/json/${newid[1]}/res/${newid[0]}/`
	);
	const res = await fetch(
		`${params[3]}//${params[2]}/api/facebook/${params[1]}/json/${newid[1]}/res/${newid[0]}/`
	);

	const rendered = await res.json();

	return new ImageResponse(
		(
			<div style={{ display: "flex" }}>
				<img
					src={`https://kloun.lol/fbapps/${params[1]}/back.png`}
					alt=""
					style={{
						width: 1200,
						height: 630,
						position: "absolute",
						top: 0,
						left: 0,
					}}
				/>
				<div style={{ display: "flex" }}>
					{rendered.map((text: any) => (
						<div key={text.id} style={text.style}>
							{text.text}
						</div>
					))}
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
