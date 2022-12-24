import { doQuery } from "@/data/client";
import { gql } from "@apollo/client";
import { ImageResponse } from "@vercel/og";
import { NextRequest, NextResponse } from "next/server";
export const config = {
	runtime: "experimental-edge",
};

const font = fetch(new URL("~/font/Nunito-Bold.ttf", import.meta.url)).then(
	(res) => res.arrayBuffer()
);

export default async function handler(req: NextRequest, res: NextResponse) {
	try {
		const fontData = await font;
		const { searchParams } = new URL(req.url);

		const hasTitle = searchParams.has("id");

		const id = hasTitle
			? searchParams.get("id")
			: "c7125f6a-5dd3-4d56-819b-02f5388e5281";
		const data = await doQuery(
			gql`
        query MyQuery($id: String!) {
          single: getDdb(id: $id) {
            id
            data
          }
        }
      `,
			{
				id: id as string,
			}
		);

		const { info, name, username, userpicture } = JSON.parse(data.data);
		const bg =
			"https://eziktokfriendly114941-staging.s3.eu-west-1.amazonaws.com/public/20231.png";

		return new ImageResponse(
			(
				<div
					style={{
						height: "100%",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "white",
						backgroundImage: `url(${bg})`,
						backgroundSize: "auto",
					}}
				>
					<div
						tw='flex px-6 py-0 rounded-2xl justify-center items-center bg-white border-8 border-indigo-800'
						style={{
							maxWidth: 630,
							fontSize: "50px",
							transform: "rotate(-4deg)",
							backgroundColor: "rgba(255, 255, 255, 0.8)",
							perspective: "500px",
						}}
					>
						<h2 tw='flex flex-col   font-bold tracking-tight text-gray-900 text-left'>
							{username && <span>{username}</span>}
							<span tw='text-indigo-800'>{info}</span>
						</h2>
					</div>
					<div tw='absolute top-4 left-4 text-xl px-4 rounded-full'>{name}</div>
					<div tw='absolute bottom-4 right-4 bg-gray-50 text-xl px-4 rounded-full flex'>
						www.kloun.lol
					</div>
				</div>
			),
			{
				headers: {
					"content-type": "image/png",
					"Cache-Control": "s-maxage=86400",
					"last-modified": "Thu, 22 Dec 2022 22:44:46 GMT",
					date: "Thu, 22 Dec 2022 22:44:46 GMT",
				},
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "Nunito Light",
						data: fontData,
						style: "normal",
					},
				],
			}
		);
	} catch (e: any) {
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
