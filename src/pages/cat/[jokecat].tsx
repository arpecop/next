import JokeThumbnail from "@/components/JokeThumbnail";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Pagination from "@/components/Pagination";

import db from "@/data/client";
// import { getPaging } from '@/components/NewPagination';

import {deslugify, slugify} from "@/utils/formatter";
import {Doc} from "../../data/structure";

const CatPage = ({
  jokes,
  pagenum,
  cat,
  slug,
  items,
}: {
  jokes: Doc[];
  pagenum: number;
  cat: string;
  slug: string;
  items: number;
}) => {
  return (
    <Main
      meta={
        <Meta
          title={`Вицове от ${cat} на страница ${pagenum}`}
          description={`Вицове от ${cat}  `}
        />
      }
    >
      <div className="text-sm font-bold">
        <ul className="flex gap-2  items-center">
          <li>
            <a href={"/?type=Jokes"}>Вицове</a>{" "}
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <li>
            <a href={`/cat/${slugify(cat)}`}>{cat}</a>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <li>
            <a href={`/cat/${cat}/${pagenum}`}>{pagenum}</a>
          </li>
        </ul>
      </div>

      <Pagination
        items={items}
        currentPage={pagenum}
        pageSize={30}
        prefix={`/cat/${slug}/`}
      />

      <div className="flex flex-wrap">
        <div className="joke">
          <div className="rounded-md jokewrap p-0">
            <ins
              className="adsbygoogle"
              style={{display: "block", textAlign: "center"}}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-5476404733919333"
              data-ad-slot="1374619867"
            />
          </div>
        </div>
        {jokes.map((item) => (
          <JokeThumbnail
            item={item}
            key={item.id}
            showcats={false}
            short={true}
          />
        ))}
        <div className="joke">
          <div className="rounded-md jokewrap p-0">
            <ins
              className="adsbygoogle"
              style={{display: "block", textAlign: "center"}}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-5476404733919333"
              data-ad-slot="1374619867"
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CatPage;

export const getServerSideProps = async ({
  query,
}: {
  query: {page: string; jokecat: string};
}) => {
  const pagenum = Number(query.page) || 1;
  const skip = pagenum * 30 - 30;

  const data = await db.view("joke/cat", {
    key: `JOK${deslugify(query.jokecat)}`,
    limit: 30,
    update: "false",
    reduce: "false",
    cache: skip > 1000 ? "ok" : "nok",
    skip,
  });

  const count = await db.view("joke/cat", {
    key: `JOK${deslugify(query.jokecat)}`,
    limit: 1,
    update: "false",
    cache: "ok",
    reduce: true,
  });

  return {
    props: {
      jokes: data.rows,
      pagenum,
      cat: deslugify(query.jokecat),
      slug: query.jokecat,
      items: count.value,
    },
  };
};

export const runtime = "experimental-edge";
