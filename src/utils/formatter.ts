import { badwords } from "./badwords";
import business from "./data/business.json";
import jokes from "./data/jokes.json";

export interface Cat {
  cat: string;
  count: number;
  slug: string;
  altcount?: number;
  althref?: string;
}
export function slugify(string: string) {
  let slug = string.replace(/\s+/g, "-");

  slug = slug.toLowerCase();

  const CYRILLIC_TO_LATIN_MAP = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sht",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "iu",
    я: "ia",
  } as { [key: string]: string };
  // Replace spaces with dashes
  slug = Array.from(slug)
    .map((ch) => CYRILLIC_TO_LATIN_MAP[ch.toLowerCase()] || ch)
    .join("");

  // Remove any remaining non-alphanumeric characters and replace them with a dash
  slug = slug.replace(/[^a-z0-9-]+/g, "-").replace(/[-]+/g, "-");

  return slug || "404";
}

export const catsdata: Cat[] = jokes.map((item) => {
  return {
    ...item,
    slug: slugify(item.cat),
  };
});

export const businessdata: Cat[] = business.map((item) => {
  return {
    ...item,
    slug: slugify(item.cat),
  };
});

export function profanityFilter(title: string): string {
  // Create an array to store the tags
  let tags: string[] = [];

  // const regex = /[^\u0400-\u04FF]/g;
  // const processedTitle = title.replace(regex, ' ');

  const words = title.split(" ");

  const filteredWords = words.map((word) => {
    // Lowercase the word and check if it is a stop word
    return badwords.includes(word.toLowerCase()) ? word.charAt(0) + "🤬" : word;
  });

  // Map the filtered words to the tags array
  tags = filteredWords.map((word) => word);

  // Return the array of tags
  return tags.join(" ");
}

export const formattedjoke = (joke: string): string => {
  const formatted = joke
    .replace(/[ ]+/g, " ")
    .replace(/—/g, "\n-")
    .replace(/— ([А-Я])/g, "\n- $1")
    .replace(/-([А-Я])/g, "\n- $1")
    .replace(/[ ]+- ([А-Я])/g, "\n- $1")
    .replace(/\?/g, "?\n")
    .replace(/\n+/g, "\n")
    .split("\n")
    .filter((x) => x.length > 2)
    .join("\n");

  return formatted;
};

export const deslugify = (slug: string): string => {
  const item = [...businessdata, ...catsdata].find((x) => x.slug === slug);
  return item ? item.cat : "";
};
// SEO keywords

export function summarizeKeywords(title: string): string[] {
  // Create an array to store the tags
  let tags: string[] = [];

  // Use a regular expression to remove non-Cyrillic alphabet characters and special symbols
  const regex = /[^\u0400-\u04FF]/g;
  const processedTitle = title.replace(regex, " ");

  // Split the processed title into words
  const words = processedTitle.split(" ");

  // Remove the stop words using the filter function
  const filteredWords = words.filter((word) => {
    // Lowercase the word and check if it is a stop word
    return !stopwordsBg.includes(word.toLowerCase()) && word.length >= 6;
  });

  // Map the filtered words to the tags array
  tags = filteredWords.map((word) => word);

  // Return the array of tags
  return tags;
}
