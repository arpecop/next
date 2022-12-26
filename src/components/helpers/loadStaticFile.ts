import path from "path";
import { promises as fs } from "fs";
const loadStaticFile = (
  loc: string
): Promise<{ [key: string]: string | { [key: string]: any }[] }[]> => {
  const jsonDirectory = path.join(process.cwd(), "public/data/");
  const dest = `${jsonDirectory}${loc}.json`;
  console.log(dest);
  return new Promise((resolve) => {
    const data = fs.readFile(dest, "utf-8");
    resolve(JSON.parse(data));
  });
};
export default loadStaticFile;
