import {ThemeProvider} from "next-themes";
import type {AppProps} from "next/app";
import "../styles/other.css";
import "../styles/global.css";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme={"light"}
    >
      <Script
        id="Adsense-id"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle w-full.js?client=ca-pub-5476404733919333"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
//x
