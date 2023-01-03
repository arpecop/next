import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/other.css";

export default function MyApp({ Component, pageProps }: AppProps) {
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

//x
