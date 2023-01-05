const fetcher = (url: string) => fetch(url).then((res) => res.json());
const loadFetchFile = async (
  loc: string
): Promise<{ [key: string]: string | { [key: string]: any }[] }[]> => {
  const url = "https://eziktok.com/data/";
  const data = await fetcher(`${url}${loc}.json`);
  return new Promise((resolve) => {
    resolve(data);
  });
};
export default loadFetchFile;
