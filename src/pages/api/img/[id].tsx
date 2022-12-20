import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { remappedJokeFunction } from "../../../components/JokeText";
import { profanityFilter } from "../../../utils/formatter";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>

    const joke = profanityFilter(
      "да това е виц \n нев лайн \n-Да -И аз ко путка еба ебане лайно"
    );

    return new ImageResponse(
      (
        <div
          style={{
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            zoom: 2,
          }}
        >
          {remappedJokeFunction(joke).map(
            ({
              oddness,
              line,
              key,
            }: {
              oddness?: string;
              line: string;
              key: number;
            }) =>
              oddness ? (
                <div
                  className={`text-5xl ${oddness === "even" ? "flex-row-reverse" : ""
                    }`}
                  key={key}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    className={`  relative whitespace-pre-wrap rounded-lg p-2   shadow-2xl ${oddness === "even"
                        ? "bg-violet-900 text-right  "
                        : "bg-indigo-700 text-left "
                      }`}
                    style={{
                      display: "flex",
                    }}
                  >
                    {oddness === "odd" ? (
                      <div className=' '>{line}</div>
                    ) : (
                      <div>{line}</div>
                    )}
                  </div>
                </div>
              ) : (
                <div key={key} className='block pb-4 text-lg flex'>
                  {line}
                </div>
              )
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
