import { formattedjoke } from "@/utils/formatter";
const Ad = () => (
  <ins
    className="adsbygoogle"
    style={{ dislay: 'block', minWidth: 250 }}
    data-ad-format="fluid"
    data-ad-layout-key="-hh-7+2h-1m-4u"
    data-ad-client="ca-pub-5476404733919333"
    data-ad-slot="6719003089"
  />
);

export const remappedJokeFunction = (joke: string) => {
  let i1 = 0;
  return formattedjoke(joke)
    .split("\n")
    .map((line, i) => {
      const num =
        line.startsWith("-") ||
          line.startsWith(" -") ||
          line.startsWith("–") ||
          line.startsWith("  -")
          ? (i1 += 1) % 2 === 0
            ? "even"
            : "odd"
          : false;

      return {
        key: i,
        line:
          num === "odd" || num === "even"
            ? line.replace("-", "").replace("–", "")
            : line,
        ...(num && { oddness: num }),
      };
    });
};

export const FormatJoke = ({
  joke,
  short,
}: {
  joke: string;
  short?: boolean;
}): JSX.Element => {
  if (short) {
    const substr = joke.slice(0, 150);
    const jlen = joke.length <= 150;
    const lines = formattedjoke(
      jlen ? joke.replace(/\.../g, "") : `${substr} ...`
    )
      .split("\n")
      .slice(0, 3);
    return (
      <>
        {lines.map((line: string) => (
          <p key={line}>
            {line.endsWith("...") ? (
              <>
                {line.replace(/\.../g, "")}{" "}
                <span className="absolute h-6   w-8 text-4xl">
                  <span className="absolute ml-1 leading-4 text-purple-600">
                    ...
                  </span>
                </span>
              </>
            ) : (
              <>{line}</>
            )}
          </p>
        ))}
      </>
    );
  }

  const remapped = remappedJokeFunction(joke);
  return (
    <>
      {remapped.map(
        ({ oddness, line, key }: { oddness?: string; line: string; key: number }) =>
          oddness ? (
            <div
              className={`flex flex-wrap pb-4 ${oddness === "even" ? "flex-row-reverse" : ""
                }`}
              key={key}
            >
              <div
                className={`relative whitespace-pre-wrap rounded-lg p-2 font-sans font-medium shadow-2xl ${oddness === "even"
                    ? "bg-violet-900 text-right dark:bg-slate-200"
                    : "bg-indigo-700 text-left dark:bg-slate-400"
                  }`}
              >
                {oddness === "odd" ? (
                  <div className="absolute -left-4 top-3 inline-block w-4 overflow-hidden">
                    <div className="h-16  origin-top-right -rotate-45 bg-indigo-700 dark:bg-slate-400" />
                  </div>
                ) : (
                  <div className="absolute -right-4 top-3 inline-block w-4 overflow-hidden">
                    <div className=" h-16  origin-top-left rotate-45 bg-violet-900 dark:bg-slate-200" />
                  </div>
                )}
                {line} {key === 3 && <Ad />}
              </div>
            </div>
          ) : (
            <div key={key} className="block pb-4 text-lg">
              {line}
            </div>
          )
      )}
    </>
  );
};
