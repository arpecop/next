import { doQuery } from "@/data/client";
import { gql } from "@apollo/client";
import { ImageResponse } from "@vercel/og";
import Banicak from "../../../facebook/result/banicak";

export const config = {
	runtime: "experimental-edge",
};
const font = fetch(new URL("~/font/Nunito-Bold.ttf", import.meta.url)).then(
	(res) => res.arrayBuffer()
);

const ComponentHere = () => {
	return <h1>test</h1>;
};

console.log(ComponentHere.toString());

export default async function handler(req: NextRequest) {
	const fontData = await font;
	const { searchParams } = new URL(req.url);

	const hasTitle = searchParams.has("id");

	const id = hasTitle
		? searchParams.get("id")
		: "c7125f6a-5dd3-4d56-819b-02f5388e5281";

	if (id === "test") {
		return new Response("<h1>test</h1>", {
			headers: {
				"content-type": "text/html",
			},
		});
	} else {
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
		return new ImageResponse(
			<Banicak {...{ info, name, username, userpicture }} />,
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
}
