import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/other.css";
import "../styles/global.css";
import Script from "next/script";


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Script id="Adsense-id" async
      onError={(e) => { console.error("Script failed to load", e); }}
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5476404733919333"
      crossOrigin="anonymous"
    />
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme={"light"}
    >



      <Component {...pageProps} />
    </ThemeProvider>
  </>
  );
}
export default MyApp;
//x
