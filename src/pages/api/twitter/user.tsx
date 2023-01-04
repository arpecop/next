import type { NextRequest } from "next/server";
import { minifyTweets } from "../../twitter/[id]";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id") as string;
	const resp = await minifyTweets(id);

	return new Response(JSON.stringify(resp), {
		status: 200,
		headers: {
			"content-type": "application/json",
			"cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
		},
	});
}
