export interface Cat {
  cat: string;
  count: number;
  slug: string;
  altcount?: number;
  althref?: string;
}

export const slugify = (string: string): string => {
  return string
    .toUpperCase()
    .replace(/\*/g, '-')
    .replace(/ /g, '-')
    .replace(/А/g, 'a')
    .replace(/Б/g, 'b')
    .replace(/В/g, 'v')
    .replace(/Г/g, 'g')
    .replace(/Д/g, 'd')
    .replace(/Е/g, 'e')
    .replace(/Ж/g, 'zh')
    .replace(/З/g, 'z')
    .replace(/И/g, 'i')
    .replace(/Й/g, 'j')
    .replace(/К/g, 'k')
    .replace(/Л/g, 'l')
    .replace(/М/g, 'm')
    .replace(/Н/g, 'n')
    .replace(/О/g, 'o')
    .replace(/П/g, 'p')
    .replace(/Р/g, 'r')
    .replace(/С/g, 's')
    .replace(/Т/g, 't')
    .replace(/У/g, 'u')
    .replace(/Ф/g, 'f')
    .replace(/Х/g, 'h')
    .replace(/Ц/g, 'c')
    .replace(/Ч/g, 'ch')
    .replace(/Ш/g, 'sh')
    .replace(/Щ/g, 'sht')
    .replace(/Ь/g, '')
    .replace(/Ъ/g, 'a')
    .replace(/Ю/g, 'ju')
    .replace(/Я/g, 'ya');
};

export const formattedjoke = (joke: string): string => {
  return joke
    .replace(/\s+/g, ' ')
    .replace(/- А/g, '\n- А')
    .replace(/- Б/g, '\n- Б')
    .replace(/- В/g, '\n- В')
    .replace(/- Г/g, '\n- Г')
    .replace(/- Д/g, '\n- Д')
    .replace(/- Е/g, '\n- Е')
    .replace(/- Ж/g, '\n- Ж')
    .replace(/- З/g, '\n- З')
    .replace(/- И/g, '\n- И')
    .replace(/- Й/g, '\n- Й')
    .replace(/- К/g, '\n- К')
    .replace(/- Л/g, '\n- Л')
    .replace(/- М/g, '\n- М')
    .replace(/- Н/g, '\n- Н')
    .replace(/- О/g, '\n- О')
    .replace(/- П/g, '\n- П')
    .replace(/- Р/g, '\n- Р')
    .replace(/- С/g, '\n- С')
    .replace(/- Т/g, '\n- Т')
    .replace(/- У/g, '\n- У')
    .replace(/- Ф/g, '\n- Ф')
    .replace(/- Х/g, '\n- Х')
    .replace(/- Ц/g, '\n- Ц')
    .replace(/- Ч/g, '\n- Ч')
    .replace(/- Ш/g, '\n- Ш')
    .replace(/- Щ/g, '\n- Щ')
    .replace(/- Ю/g, '\n- Ю')
    .replace(/- Я/g, '\n- Я')
    .replace(/-А/g, '\n-А')
    .replace(/-Б/g, '\n-Б')
    .replace(/-В/g, '\n-В')
    .replace(/-Г/g, '\n-Г')
    .replace(/-Д/g, '\n-Д')
    .replace(/-Е/g, '\n-Е')
    .replace(/-Ж/g, '\n-Ж')
    .replace(/-З/g, '\n-З')
    .replace(/-И/g, '\n-И')
    .replace(/-Й/g, '\n-Й')
    .replace(/-К/g, '\n-К')
    .replace(/-Л/g, '\n-Л')
    .replace(/-М/g, '\n-М')
    .replace(/-Н/g, '\n-Н')
    .replace(/-О/g, '\n-О')
    .replace(/-П/g, '\n-П')
    .replace(/-Р/g, '\n-Р')
    .replace(/-С/g, '\n-С')
    .replace(/-Т/g, '\n-Т')
    .replace(/-У/g, '\n-У')
    .replace(/-Ф/g, '\n-Ф')
    .replace(/-Х/g, '\n-Х')
    .replace(/-Ц/g, '\n-Ц')
    .replace(/-Ч/g, '\n-Ч')
    .replace(/-Ш/g, '\n-Ш')
    .replace(/-Щ/g, '\n-Щ')
    .replace(/-Ю/g, '\n-Ю')
    .replace(/-Я/g, '\n-Я')
    .replace(/—/g, '\n-')
    .replace(/\?/g, '?\n');
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
// SEO keywords
