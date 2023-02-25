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
        title={title || "езикТок - социалната мрежа"}
        description={
          description || title || "Български сайт за безплатни обяви"
        }
        image={image}
      />

      <Header noNav={noNav ? true : false} />

      <div className='bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 h-0.5 block dark:hidden' />
      <div className='bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 h-0.5 hidden dark:block' />
      <link rel='stylesheet' type='text/css' href='/other.css' />

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
//sdsd
