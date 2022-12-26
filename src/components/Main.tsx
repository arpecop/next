import Header from "./Header";
import Meta from "./Meta";

import type { ReactNode } from "react";
const Layout = ({
  children,
  title,
  description,
  noNav,
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

      <main className='z-20 container mx-auto my-4 grow'>{children}</main>
    </div>
  );
};

export default Layout;
