import { doQuery } from "@/data/client";
import { gql } from "@apollo/client";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
export const config = {
	runtime: "experimental-edge",
};

const font = fetch(new URL("~/font/Nunito-Bold.ttf", import.meta.url)).then(
	(res) => res.arrayBuffer()
);

export default async function handler(req: NextRequest) {
	try {
		const fontData = await font;
		const { searchParams } = new URL(req.url);

		// ?title=<title>
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
			"https://eziktokfriendly114941-staging.s3.eu-west-1.amazonaws.com/public/banica1.jpg";
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
					<div tw='bg-gray-50  flex mx-6 rounded-lg rotate-12 justify-center items-center absolute opacity-70 px-6'>
						<h2 tw='flex flex-col text-4xl  font-bold tracking-tight text-gray-900 text-left opacity-0'>
							{username && <span>{username}</span>}
							<span tw='text-indigo-600'>{info}</span>
						</h2>
					</div>
					<div tw='flex mx-6 rounded-lg rotate-12 justify-center items-center'>
						<h2 tw='flex flex-col text-4xl font-bold tracking-tight text-gray-900 text-left'>
							{username && <span>{username}</span>}
							<span tw='text-indigo-800'>{info}</span>
						</h2>
					</div>
					<div tw='absolute top-4 left-4 bg-gray-50 text-xl px-4 rounded-full'>
						{name}
					</div>
					<div tw='absolute bottom-4 right-4 bg-gray-50 text-xl px-4 rounded-full'>
						www.kloun.lol
					</div>
				</div>
			),
			{
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
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
