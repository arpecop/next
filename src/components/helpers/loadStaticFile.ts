import path from "path";
import { promises as fs } from "fs";
const loadStaticFile = async (
  loc: string
): Promise<{ [key: string]: string | { [key: string]: any }[] }[]> => {
  const jsonDirectory = path.join(process.cwd(), "public/data/");
  const dest = `${jsonDirectory}${loc}.json`;
  console.log(dest);
  const data = await fs.readFile(dest, "utf-8");
  return new Promise((resolve) => {
    resolve(JSON.parse(data));
  });
};
export default loadStaticFile;
