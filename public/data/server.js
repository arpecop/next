const fs = require('fs');
const cars1 = fs.readFileSync('./carsData.json');
const cars = JSON.parse(cars1);
const ads1 = fs.readFileSync('./adsData.json');
const ads = JSON.parse(ads1);

function filterNonArrayProperties (obj) {
  return Object.entries(obj)
    .filter(([key, value]) => !Array.isArray(value))
    .reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
}

function createJsonFiles (arr, file) {
  if (file) {
    const jsonString = arr.map((x) => filterNonArrayProperties(x));

    fs.writeFileSync(`./out/${file}.json`, JSON.stringify(jsonString));
  } else {
    arr.forEach((item) => {
      if (item.hasOwnProperty('slug')) {
        const jsonString = JSON.stringify(item);
        fs.writeFileSync(`./out/${item.slug}.json`, jsonString);
      }
    });
  }
}
createJsonFiles(cars, '_carsindex');
createJsonFiles(cars);
createJsonFiles(cars.flatMap((x) => x.items).flat());
//

createJsonFiles(ads, '_adsindex');
createJsonFiles(ads);
createJsonFiles(ads.flatMap((x) => x.items).flat());


///


const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

const postData = (url, data) =>
  new Promise((resolve, reject) => {
    request.post(
      {
        url,
        body: data,
      },
      (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });

const main = async () => {
  const files = await fs.promises.readdir('./data');

  for (const file of files) {
    if (file.endsWith('.json')) {
      const data = await readFile(`./data/${file}`);
      const result = await postData('http://example.com/data', data);
 
    }
  }
};

