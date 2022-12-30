import { doQuery, gql } from "@/pages/api/graphql";

import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "experimental-edge",
};
const font = fetch(
	new URL("~/images/font/Nunito-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
	const fontData = await font;
	const { searchParams } = new URL(req.url);
	const appid = searchParams.get("appid");

	const res2 = await fetch("http://localhost:3000/" + appid + "/styles.css");
	const dataHtml = await res2.text();

	console.log(dataHtml);

	const id = searchParams.has("id") || "c7125f6a-5dd3-4d56-819b-02f5388e5281";

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

	//const { info, name, username, userpicture } = data;
	return new ImageResponse(
		<div style={{ width: 1200, height: 630, position: "relative" }}>dsadsad</div>,
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
}
