import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

import NewsThumbnail from "@/components/NewsThumbnail";
import Pagination from "@/components/Pagination";
import db from "@/data/client";

export type News = {
  title: string;
  image: string;
  nid: string;
  id: string;
  description?: string;
  parsed?: { html: string[]; description?: string };
  content: string;
};

export type RootNewsProps = {
  newsbg: News[];
  pagenum: number;
  newsbg_by_pk?: News;
  items: number;
};

const Index = ({ newsbg, pagenum, items }: RootNewsProps): JSX.Element => {
  return (
    <Main meta={<Meta title={"Новини"} description="Новини" />}>
      <div className="my-10 flex w-full flex-col">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ins
              class="adsbygoogle"
              style={{ dislay: 'block', width:250 }}
              data-ad-format="fluid"
              data-ad-layout-key="-hh-7+2h-1m-4u"
              data-ad-client="ca-pub-5476404733919333"
              data-ad-slot="6719003089"
            ></ins>
          </div>
          {newsbg.map(({ id, title, image }) => (
            <NewsThumbnail uid={id} title={title} image={image} key={id} />
          ))}
          <div className="w-full joke">
            <ins
              class="adsbygoogle"
              style={{ dislay: 'block', width:250 }}
              data-ad-format="fluid"
              data-ad-layout-key="-hh-7+2h-1m-4u"
              data-ad-client="ca-pub-5476404733919333"
              data-ad-slot="6719003089"
            ></ins>
          </div>
        </div>
      </div>
      <Pagination
        items={items}
        currentPage={pagenum}
        pageSize={30}
        prefix={`/news/`}
      />
    </Main>
  );
};

export const getServerSideProps = async (context: { query: { page?: string } }) => {
  const pagenum = context.query.page ? Number(context.query.page) : 1;
  const agregate = await db.view("newsbg/news", {
    update: false,
  });

  const data = await db.view("newsbg/news", {
    reduce: false,
    limit: 30,
    skip: pagenum * 30 - 30,
    update: false,
  });

  return {
    props: {
      newsbg: data.rows,
      pagenum,
      items: Number(agregate.value),
    },
  };
};

export default Index;
export const runtime = "experimental-edge";
