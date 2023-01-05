import { readFileSync } from "fs";
import path from "path";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const loadStaticFile = async (
  loc: string
): Promise<{ [key: string]: string | { [key: string]: any }[] }[]> => {
  const url =
    "https://raw.githubusercontent.com/arpecop/next/eziktok/public/data/";
  // const data = await fetcher(url + "" + loc);

  const rootfolder = __dirname.split(".next")[0];

  const ff = path.resolve(rootfolder, `public/data/${loc}.json`);
  const items = JSON.parse(readFileSync(ff).toString());

  return new Promise((resolve) => {
    resolve(items);
  });
};
export default loadStaticFile;
