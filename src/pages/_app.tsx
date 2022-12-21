import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/other.css";

import { Nunito } from "@next/font/google";

const nunito = Nunito({
  weight: ["300", "500", "800"],
  subsets: ["cyrillic-ext"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute='class'
      defaultTheme={"light"}
    >
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
