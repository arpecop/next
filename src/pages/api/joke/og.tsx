import { doQuery, gql } from "@/pages/api/graphql";
// import { profanityFilter } from "@/utils/formatter";

import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { remappedJokeFunction } from "../../../components/JokeText";
export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("~/images/font/Nunito-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;
  const { searchParams } = new URL(req.url);
  const hasTitle = searchParams.has("idx");
  const hasW = searchParams.has("w");
  const hasH = searchParams.has("h");
  const id = hasTitle
    ? searchParams.get("idx")
    : "4b3cd409b060563c169071e8317ec009";

  // ?title=<title>
  const w = hasW ? Number(searchParams.get("w")) : 1200;
  const h = hasH ? Number(searchParams.get("h")) : 630;

  const data = await doQuery(
    gql`
      query MyQuery($id: String!) {
        single: getDdb(id: $id) {
          id
          joke: title
          cat
          nid
          type
        }
      }
    `,
    {
      id: id as string,
    }
  );

  //const joke = profanityFilter(data.joke,"🤬");
  const joke = data.joke;
  const colors = [
    "#00d2d3",
    "#54a0ff",
    "#5f27cd",
    "#576574",
    "#341f97",
    "#10ac84",
    "#ee5253",
  ];

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  const rid = getRandomInt(colors.length - 1);

  const color1 = colors[rid];
  const color2 = colors[rid + 1];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: 35,
          color: "#dfe6e9",
          fontFamily: "Nunito Light",
        }}
      >
        <svg
          xmlns="http://w3.org/2000/svg"
          viewBox="0 0 463 463"
          style={{
            width: 63,
            height: 63,
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
          fill="#dfe6e9"
        >
          <path d="M183.5 176a7.5 7.5 0 0 0-7.5 7.5v8a7.5 7.5 0 0 0 15 0v-8a7.5 7.5 0 0 0-7.5-7.5zM279.5 176a7.5 7.5 0 0 0-7.5 7.5v8a7.5 7.5 0 0 0 15 0v-8a7.5 7.5 0 0 0-7.5-7.5zM272.229 242.03a7.5 7.5 0 0 0-11.511 9.507c-7.621 7.932-18.18 12.463-29.209 12.463-11.006 0-21.545-4.512-29.162-12.414 2.018-2.922 1.733-6.955-.868-9.556a7.5 7.5 0 0 0-10.606 0l-8 8a7.5 7.5 0 0 0 8.701 11.987C202.008 272.827 216.439 279 231.509 279c15.083 0 29.525-6.183 39.961-17.01a7.495 7.495 0 0 0 3.455.843 7.474 7.474 0 0 0 5.303-2.197 7.5 7.5 0 0 0 0-10.606l-7.999-8z" />
          <path d="M423 191.5c0-15.208-8.888-28.743-21.997-35.258C404.886 150.06 407 142.903 407 135.5c0-21.78-17.72-39.5-39.5-39.5-2.578 0-5.175.275-7.771.823C352.407 86.313 340.547 80 327.5 80c-16.588 0-30.811 10.283-36.654 24.805-20.594-63.138-52.23-100.528-53.652-102.186a7.5 7.5 0 0 0-11.388 0c-1.421 1.658-33.058 39.048-53.652 102.186C166.311 90.283 152.088 80 135.5 80c-13.047 0-24.907 6.313-32.229 16.823A37.583 37.583 0 0 0 95.5 96C73.72 96 56 113.72 56 135.5c0 7.403 2.114 14.561 5.997 20.742C48.888 162.757 40 176.292 40 191.5c0 13.047 6.313 24.907 16.823 32.229A37.651 37.651 0 0 0 56 231.5c0 16.972 10.615 31.677 26.314 37.185C87.822 284.384 102.527 295 119.5 295a39.525 39.525 0 0 0 26.852-10.54 128.288 128.288 0 0 0 13.979 8.871l-.005.014-1.828 6.094L71.552 341.9c-13.626 6.654-19.297 23.153-12.643 36.778 4.763 9.753 14.568 15.43 24.754 15.43 4.045 0 8.151-.896 12.024-2.787l41.296-20.167-6.119 20.398c-5.092 16.973-1.946 34.861 8.632 49.077C150.073 454.846 166.303 463 184.023 463h94.973c17.72 0 33.95-8.154 44.527-22.371 10.578-14.216 13.724-32.104 8.632-49.077l-6.14-20.468 41.439 20.237a27.328 27.328 0 0 0 12.023 2.787c10.185 0 19.992-5.678 24.754-15.43 6.654-13.625.983-30.124-12.643-36.778L304.5 299.37l-1.807-6.025-.005-.014a128.431 128.431 0 0 0 13.968-8.864A39.519 39.519 0 0 0 343.5 295c16.973 0 31.678-10.616 37.186-26.315C396.384 263.177 407 248.472 407 231.5c0-2.578-.276-5.175-.823-7.771C416.687 216.407 423 204.547 423 191.5zM231.509 296c-36.909 0-69.722-14.056-90.248-35.72.097-.117.199-.226.29-.35 16.679-22.781 40.709-34.316 59.454-36.527C204.521 236.96 216.86 247 231.5 247s26.979-10.04 30.495-23.596c18.745 2.21 42.775 13.746 59.454 36.527.093.128.199.24.299.36C301.221 281.948 268.412 296 231.509 296zM215 215.5c0-9.098 7.402-16.5 16.5-16.5s16.5 7.402 16.5 16.5-7.402 16.5-16.5 16.5-16.5-7.402-16.5-16.5zm116.379 32.708c-19.682-25.089-47.501-37.681-69.209-39.861C258.921 194.414 246.408 184 231.5 184s-27.421 10.414-30.671 24.346c-21.704 2.18-49.517 14.768-69.199 39.849-8.059-12.191-12.621-26.031-12.621-40.695a70.798 70.798 0 0 1 3.42-21.704C135.083 146.468 179.938 119 231.509 119c62.033 0 112.5 39.701 112.5 88.5 0 14.669-4.565 28.514-12.63 40.708zM194.657 87h73.687a340.647 340.647 0 0 1 8.673 23.82c-14.141-4.401-29.482-6.82-45.507-6.82-15.925 0-31.294 2.406-45.525 6.818A339.762 339.762 0 0 1 194.657 87zm14.988-32h43.711a340.454 340.454 0 0 1 8.462 17h-60.635a340.454 340.454 0 0 1 8.462-17zM231.5 19.778c3.402 4.669 8.083 11.482 13.352 20.222h-26.703c5.268-8.741 9.949-15.553 13.351-20.222zM119.5 280c-11.466 0-21.263-7.827-23.825-19.035a7.5 7.5 0 0 0-5.64-5.64C78.828 252.763 71 242.966 71 231.5c0-2.801.56-5.702 1.663-8.621a7.5 7.5 0 0 0-3.751-9.404C60.331 209.326 55 200.905 55 191.5c0-12.074 9.077-22.446 21.114-24.126a7.5 7.5 0 0 0 3.775-13.181C74.24 149.468 71 142.654 71 135.5c0-13.509 10.991-24.5 24.5-24.5 2.801 0 5.701.56 8.621 1.663a7.498 7.498 0 0 0 9.404-3.751C117.674 100.331 126.094 95 135.5 95c13.509 0 24.5 10.991 24.5 24.5v2.304c-24.959 13.708-43.834 34.485-51.85 59.398a85.756 85.756 0 0 0-4.141 26.298c0 25.644 11.553 49.135 30.649 67.235A24.507 24.507 0 0 1 119.5 280zm-30.395 97.843a12.417 12.417 0 0 1-9.549.589 12.416 12.416 0 0 1-7.168-6.335 12.421 12.421 0 0 1-.589-9.549 12.416 12.416 0 0 1 6.335-7.168l11.992-5.857 11.181 22.362-12.202 5.958zm25.681-12.542-11.181-22.362 49.025-23.942-9.779 32.598-28.065 13.706zm36.744 66.374c-7.719-10.375-10.015-23.428-6.299-35.813l28.798-95.994c15.176 6.249 32.088 10.101 49.98 10.948V448h-39.986c-12.931 0-24.774-5.951-32.493-16.325zm239.811-69.128a12.42 12.42 0 0 1-.589 9.549c-1.465 3-4.011 5.25-7.168 6.335s-6.548.876-9.549-.589l-12.315-6.014 11.181-22.362 12.105 5.912c3 1.466 5.25 4.012 6.335 7.169zm-31.919-19.663-11.181 22.362-28.094-13.72-9.779-32.598 49.054 23.956zm-41.634 52.978c3.715 12.385 1.419 25.438-6.299 35.813C303.77 442.049 291.926 448 278.996 448H239.01V310.816c17.892-.847 34.804-4.699 49.98-10.948l28.798 95.994zm76.299-182.387a7.5 7.5 0 0 0-3.751 9.404c1.104 2.919 1.663 5.82 1.663 8.621 0 11.466-7.828 21.263-19.035 23.825a7.499 7.499 0 0 0-5.64 5.64C364.763 272.173 354.965 280 343.5 280a24.51 24.51 0 0 1-15.148-5.256c19.101-18.101 30.658-41.596 30.658-67.244 0-35.579-22.232-67.021-56.009-85.657V119.5c0-13.509 10.991-24.5 24.5-24.5 9.405 0 17.826 5.331 21.975 13.912a7.5 7.5 0 0 0 9.404 3.751c2.919-1.104 5.82-1.663 8.621-1.663 13.509 0 24.5 10.991 24.5 24.5 0 7.154-3.24 13.968-8.889 18.693a7.5 7.5 0 0 0 3.775 13.181C398.922 169.054 408 179.426 408 191.5c0 9.405-5.332 17.826-13.913 21.975z" />
          <path d="M199.5 366c7.995 0 14.5-6.505 14.5-14.5s-6.505-14.5-14.5-14.5-14.5 6.505-14.5 14.5 6.505 14.5 14.5 14.5zM263.5 366c7.995 0 14.5-6.505 14.5-14.5s-6.505-14.5-14.5-14.5-14.5 6.505-14.5 14.5 6.505 14.5 14.5 14.5zM199.5 385c-7.995 0-14.5 6.505-14.5 14.5s6.505 14.5 14.5 14.5 14.5-6.505 14.5-14.5-6.505-14.5-14.5-14.5zM263.5 385c-7.995 0-14.5 6.505-14.5 14.5s6.505 14.5 14.5 14.5 14.5-6.505 14.5-14.5-6.505-14.5-14.5-14.5z" />
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 35,
            maxHeight: 550,
            width: "100%",
          }}
        >
          {remappedJokeFunction(joke).map((x, i) => {
            return (
              <div
                key={x.key}
                style={{
                  display: "flex",

                  width: "100%",
                }}
              >
                {x.oddness ? (
                  <>
                    <div
                      style={
                        x.oddness === "odd"
                          ? {
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                          }
                          : {
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            width: "100%",
                          }
                      }
                    >
                      <div
                        style={{
                          borderRadius:
                            i === 0
                              ? "25px 25px 25px 25px"
                              : "25px 25px 25px 25px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          background: x.oddness === "odd" ? color1 : color2,
                        }}
                      >
                        {x.line}
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                    style={{
                      background: "black",
                      width: "100%",
                      textAlign: "center",
                      display: "flex",
                      borderRadius: "25px 25px 25px 25px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    {x.line}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ),
    {
      width: w > 1200 ? 1200 : w || 1200,
      height: h > 1200 ? 1200 : h || 630,
      emoji: "fluentFlat",
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
