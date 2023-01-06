import {ThemeProvider} from "next-themes";
import type {AppProps} from "next/app";

import "../styles/global.css";
import "../styles/other.css";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme={"light"}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
//x
