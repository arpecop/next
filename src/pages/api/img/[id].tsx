import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { remappedJokeFunction } from "../../../components/JokeText";
import { profanityFilter } from "../../../utils/formatter";

export const config = {
  runtime: "edge",
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
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {JSON.stringify(req)}
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
                  key={key}
                  style={{
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    {oddness === "odd" ? (
                      <div
                        className='font-5xl'
                        style={{
                          display: "flex",
                        }}
                      >
                        od {line}
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          color: "red",
                          fontSize: 40,
                        }}
                        className='pl-2'
                      >
                        oven {line}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div key={key} className='block pb-4 text-lg flex font-5xl'>
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
