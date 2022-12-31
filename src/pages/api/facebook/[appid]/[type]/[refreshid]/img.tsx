import { ImageResponse } from "@vercel/og";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler() {
	return new ImageResponse(
		(
			<div style={{ display: "flex" }}>
				<img
					src="http://localhost:3000/fbapps/banica2023/back.png"
					alt=""
					style={{
						width: 1200,
						height: 630,
					}}
				/>
				<img
					src="http://localhost:3000/api/facebook/banica2023/svg/c34985d2-14f5-4945-ade5-665f6723ff02/res/c34985d2-14f5-4945-ade5-665f6723ff02/"
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
