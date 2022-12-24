export function createSlug(string: string) {
  let slug = string.replace(/\s+/g, '-');

  slug = slug.toLowerCase();

  const CYRILLIC_TO_LATIN_MAP = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'i',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ъ: '',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'iu',
    я: 'ia',
  } as { [key: string]: string };
  // Replace spaces with dashes
  slug = Array.from(slug)
    .map((ch) => CYRILLIC_TO_LATIN_MAP[ch.toLowerCase()] || ch)
    .join('');

  // Remove any remaining non-alphanumeric characters and replace them with a dash
  slug = slug.replace(/[^a-z0-9-]+/g, '-').replace(/[-]+/g, '-');

  return slug || '404';
}
