/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Pagination from "@/components/Pagination";

import db from "@/data/client";

import { shuffle } from "lodash";
import Link from "next/link";

export type User = {
  id: string;
};
const Index = ({
  twusers,
  pagenum,
  items,
  letter,
  sections,
}: {
  twusers: User[];
  pagenum: number;
  items: number;
  letter: string;
  sections: { key: string; value: number }[];
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
      <div className="flex flex-wrap justify-center items-center gap-1 mb-3">
        {sections.map(({ key }) => (
          <Link
            passHref
            key={key}
            href={"/tw/" + key + "_1"}
            className="bg-slate-900 p-2 font-bold text-white dark:bg-white dark:text-slate-900 rounded-md"
          >
            {key}
          </Link>
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-center p-0 gap-2">
        {twusers.map((user) => (
          <Link
            passHref
            key={user.id}
            href={`/tw/u/${user.id.replace("_tw", "")}`}
            className="active flex  bg-slate-900 font-bold text-white dark:bg-white dark:text-slate-900 px-3 rounded-xl text-sm"
          >
            {user.id.replace("_tw", "")}
          </Link>
        ))}
      </div>
      <div className=" flex justify-center items-center">

        <amp-ad width="100vw" height="320"
          type="adsense"
          data-ad-client="ca-pub-5476404733919333"
          data-ad-slot="6617253971"
          data-auto-format="rspv"
          data-full-width="">
          <div overflow=""></div>
        </amp-ad>
      </div>
      <Pagination
        noReplace
        items={items}
        currentPage={pagenum}
        pageSize={150}
        prefix={`/tw/${letter}_`}
      />
    </Main>
  );
};

export const getServerSideProps = async ({
  query,
}: {
  query: { page: string; jokecat: string };
}) => {
  const p = query.page;
  const pagenum = p ? Number(query.page.split("_")[1]) : 1 || 1;
  const letter = p ? p.split("_")[0] : "a" || "a";

  const data = await db.view("twitter/byletter", {
    limit: 150,
    reduce: false,
    update: "lazy",
    key: letter,
    skip: pagenum * 150 - 150,
  });
  const agregate = await db.view("twitter/byletter", {
    key: letter,
    reduce: true,
    update: "lazy",
    cache: "ok",
  });

  return {
    props: {
      twusers: data.rows,
      items: agregate.value,
      letter,
      pagenum,
      sections,
    },
  };
};

const sections = [
  {
    key: "a",
    value: 87263,
  },
  {
    key: "b",
    value: 63283,
  },
  {
    key: "c",
    value: 78089,
  },
  {
    key: "d",
    value: 64504,
  },
  {
    key: "e",
    value: 36381,
  },
  {
    key: "f",
    value: 35884,
  },
  {
    key: "g",
    value: 40043,
  },
  {
    key: "h",
    value: 44788,
  },
  {
    key: "i",
    value: 36530,
  },
  {
    key: "j",
    value: 54206,
  },
  {
    key: "k",
    value: 58601,
  },
  {
    key: "l",
    value: 49968,
  },
  {
    key: "m",
    value: 102589,
  },
  {
    key: "n",
    value: 50468,
  },
  {
    key: "o",
    value: 27438,
  },
  {
    key: "p",
    value: 52241,
  },
  {
    key: "q",
    value: 4738,
  },
  {
    key: "r",
    value: 53878,
  },
  {
    key: "s",
    value: 112918,
  },
  {
    key: "t",
    value: 79638,
  },
  {
    key: "u",
    value: 16650,
  },
  {
    key: "v",
    value: 16875,
  },
  {
    key: "w",
    value: 26262,
  },
  {
    key: "x",
    value: 6392,
  },
  {
    key: "y",
    value: 21792,
  },
  {
    key: "z",
    value: 10569,
  },
];

export default Index;
