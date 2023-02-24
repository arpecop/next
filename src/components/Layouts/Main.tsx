import Header from "@/components/Layouts/Header";

import {ReactNode, useEffect} from "react";

import Footer from "./Footer";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  hideFooter?: boolean;
  title?: string;
  noContainer?: boolean;
};

const Main = (props: IMainProps) => {
  useEffect(() => {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    let adsbygoogle: any;
    const ads = document.getElementsByClassName("adsbygoogle").length as number;
    for (let i = 0; i < ads; i++) {
      try {
        // rome-ignore lint/suspicious/noExplicitAny: <explanation>
        (adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        //////console.log(e);
      }
    }
  }, []);
  return (
    <div className="flex flex-col h-screen">
      {props.meta}
      <Header />
      {props.noContainer ? (
        <main className="flex z-20 grow">{props.children}</main>
      ) : (
        <main className="container mx-auto z-20 grow px-1">
          {props.children}
        </main>
      )}
      <Footer hideFooter={props.hideFooter} />
    </div>
  );
};
// dasd
export default Main;
