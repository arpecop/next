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

	const { info, name, username } = JSON.parse(data.data);
	const bg =
		"https://eziktokfriendly114941-staging.s3.eu-west-1.amazonaws.com/public/20231.png";

	return new ImageResponse(
		(
			<div
				style={{
					height: 630,
					width: 1200,
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
					style={{
						display: "flex",
						maxWidth: 630,
						fontSize: "50px",
						transform: "rotate(-4deg)",
						backgroundColor: "rgba(255, 255, 255, 0.8)",
						perspective: "500px",
						paddingTop: "0",
						paddingBottom: "0",
						paddingLeft: "1.5rem",
						paddingRight: "1.5rem",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "1rem",
						borderWidth: "8px",
						borderColor: "#3730A3",
					}}
				>
					<h2
						style={{
							display: "flex",
							color: "#111827",
							fontWeight: "700",
							letterSpacing: "-0.025em",
							textAlign: "left",
							flexDirection: "column",
						}}
					>
						{username && <span>{username}</span>}
						<span style={{ color: "#3730A3" }}>{info}</span>
					</h2>
				</div>
				<div
					style={{
						position: "absolute",
						top: "1rem",
						left: "1rem",
						paddingLeft: "1rem",
						paddingRight: "1rem",
						fontSize: "1.25rem",
						lineHeight: "1.75rem",
						borderRadius: "9999px",
					}}
				>
					{name}
				</div>
				<div
					style={{
						display: "flex",
						position: "absolute",
						right: "1rem",
						bottom: "1rem",
						paddingLeft: "1rem",
						paddingRight: "1rem",
						backgroundColor: "#F9FAFB",
						fontSize: "1.25rem",
						lineHeight: "1.75rem",
						borderRadius: "9999px",
					}}
				>
					kloun.lol
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
}
