export const AppConfig = {
  site_name: 'kloun.lol',
  title: 'Най-яките вицове и меметалики за клоуни',
  description: 'Най-яките вицове и меметалики за клоуни',
  locale: 'bg_BG',
  prefix: 'https://kloun.lol',
  link:
    process.env.USER && process.env.USER === 'rudix'
      ? 'http://localhost:3000'
      : 'https://kloun.lol',
};
