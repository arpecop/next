import Search from "./ads/Search";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

import type { ReactNode } from "react";
const Layout = ({
  children,
  title,
  description,
  image,
  noNav,
  disableContainer,
  hideFooter,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  noNav?: boolean;
  hideFooter?: boolean;
  disableContainer?: boolean;
}) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Meta
        title={title || "Radoslav Georgiev (Rudi) - Full Stack Web Developer"}
        description={
          description ||
          title ||
          "Radoslav Georgiev (Rudi) - Full Stack Web Developer"
        }
        image={"https://rudixlab.com/bubble.png"}
      />

      <Header noNav={noNav ? true : false} />

      {disableContainer ? (
        <main className='z-20  my-4 grow'>
          <div className='stickysearch py-3 -mt-4'>
            <Search />
          </div>
          <div className='px-4 flex flex-col md:flex-row '>{children}</div>
        </main>
      ) : (
        <main className='z-20 container mx-auto my-4 grow'>{children}</main>
      )}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
