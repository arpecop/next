import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/other.css";
import "../styles/global.css";


function MyApp({ Component, pageProps }: AppProps) {
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
