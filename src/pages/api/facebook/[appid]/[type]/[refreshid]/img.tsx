import { ImageResponse } from "@vercel/og";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler(req) {
	const { searchParams } = new URL(req.url);
	const params = req.url
		.split("?")[0]
		.split("/")
		.reverse()
		.filter((x: string) => x.length > 3);
	console.log(searchParams, params);
	return new ImageResponse(
		(
			<div style={{ display: "flex" }}>
				<img
					src={`http://localhost:3000/fbapps/${params[1]}/back.png`}
					alt=""
					style={{
						width: 1200,
						height: 630,
					}}
				/>
				<img
					src={`http://localhost:3000/api/facebook/${params[1]}/svg/${params[0]}/res/${params[1]}/`}
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
