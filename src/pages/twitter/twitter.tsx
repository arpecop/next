/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Pagination from "@/components/Pagination";

import db from "@/data/client";

import {shuffle} from "lodash";

export type User = {
  id: string;
};
const Index = ({
  twusers,
  pagenum,
  items,
}: {
  twusers: User[];
  pagenum: number;
  items: number;
}): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={shuffle(twusers)
            .slice(0, 5)
            .map((item: User) => item.id)
            .join(" ")}
          description="Twitter DB"
        />
      }
    >
      <div className="flex ">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <button
            key={letter}
            className="active flex gap-4 bg-slate-900 p-2 font-bold text-white dark:bg-white dark:text-slate-900"
          >
            {letter}
          </button>
        ))}
      </div>
      <ul className="menu menu-compact flex-row flex-wrap justify-center p-0">
        {twusers.map((user) => (
          <li key={user.id} className="m-1">
            <a
              href={`/tw/u/${user.id.replace("_tw", "")}`}
              className="active flex gap-4 bg-slate-900 font-bold text-white dark:bg-white dark:text-slate-900"
            >
              {user.id.replace("_tw", "")}
            </a>
          </li>
        ))}
      </ul>
      <Pagination
        items={items}
        currentPage={pagenum}
        pageSize={120}
        prefix={`/tw/`}
      />
    </Main>
  );
};

export const getServerSideProps = async ({
  query,
}: {
  query: {page: string; jokecat: string};
}) => {
  const pagenum = Number(query.page) || 1;

  const data = await db.view("twitter/byletter", {
    limit: 120,
    reduce: false,
    update: false,
    skip: pagenum * 120 - 120,
  });
  console.log(data);

  return {
    props: {
      twusers: data.rows,
      items: data.total_rows,
      pagenum,
    },
  };
};

export default Index;
