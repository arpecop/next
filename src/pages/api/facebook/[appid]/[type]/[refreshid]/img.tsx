import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
	const params = req.url
		.split("?")[0]
		.split("/")
		.reverse()
		.filter((x: string) => x.length > 3);

	console.log(params);

	const newid = params[0].split("_");

	return new ImageResponse(
		(
			<div style={{ display: "flex" }}>
				<img
					src={`https://kloun.lol/fbapps/${params[1]}/back.png`}
					alt=""
					style={{
						width: 1200,
						height: 630,
					}}
				/>
				<img
					src={`https://kloun.lol/api/facebook/${params[1]}/svg/${newid[1]}/res/${newid[0]}/`}
					alt=""
					style={{ position: "absolute" }}
				/>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
