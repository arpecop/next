import '../components/styles/global.css';

import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';
//import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute='class' defaultTheme='light'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
