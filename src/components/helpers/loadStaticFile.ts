const fetcher = (url: string) => fetch(url).then((res) => res.json());

const loadStaticFile = async (
  loc: string
): Promise<{[key: string]: string | {[key: string]: any}[]}[]> => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/data/"
      : "http://localhost:3000/api/data/";
  const data = await fetcher(url + "" + loc);

  return new Promise((resolve) => {
    resolve(data);
  });
};
export default loadStaticFile;
