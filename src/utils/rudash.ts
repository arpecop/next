export const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const chunk = (array: any[], size: number) => {
  const chunked = [];
  for (let element of array) {
    const lastChunk = chunked[chunked.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      chunked.push([element]);
    } else {
      lastChunk.push(element);
    }
  }
  return chunked;
};

export function keyBy<T extends Record<PropertyKey, any>>(
  arr: T[],
  key: keyof T
): any {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {} as any);
}

export function groupBy<T extends Record<PropertyKey, any>>(
  arr: T[],
  key: keyof T
): any {
  return arr.reduce((obj, item) => {
    const groupedKey = item[key];
    if (!obj[groupedKey]) {
      obj[groupedKey] = [];
    }
    obj[groupedKey].push(item);
    return obj;
  }, {} as any);
}
