import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/other.css";
import "../styles/global.css";
import { GoogleAdSense } from "nextjs-google-adsense";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme={"light"}
    >
      <GoogleAdSense publisherId="ca-pub-5476404733919333" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
//x
