import type { GetServerSideProps } from "next";
import { ResponsiveAdUnit } from "nextjs-google-adsense";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";

import { Cat, slugify } from "../../utils/formatter";

import db from "@/data/client";
import Link from "next/link";
import Pagination from "@/components/Pagination";

export type Company = {
  _id: string;
  name: string;
  zip: number;
  location: string;
  uid?: string;
  created_at: number;
};

const Index = ({
  cats,
  cat,
  items,
  pagenum,
  slug,
}: {
  cats: Cat[];
  items?: number;
  pagenum?: number;
  slug?: string;
  cat?: { value: string; id: string }[];
}): JSX.Element => {
  return (
    <Main meta={<Meta title="Бизнес фирми" description="Бизнес фирми" />}>
      <div className=" flex justify-center items-center">

        <ResponsiveAdUnit
          publisherId="ca-pub-5476404733919333"
          slotId="1374619867"
          type="after-home-hero" />
      </div>
      <Nav cats={cats} prefix="business" limit={50} />
      <div className="my-5 flex w-full flex-wrap">
        {cat?.map((item) => (
          <div
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-1 flex"
            key={item.id}
          >
            <Link
              className="border border-1 grow flex justify-center items-center p-1 rounded-md text-center text-xs font-bold uppercase dark:bg-white shadow-lg"
              href={`/business/company/${item.id}`}
            >
              {item.value.split("    ")[0]}
            </Link>
          </div>
        ))}
      </div>
      {pagenum && (
        <Pagination
          noReplace
          items={items || 1}
          currentPage={pagenum}
          pageSize={100}
          prefix={`/business/${slug}_`}
        />
      )}
      <div className=" flex justify-center items-center">
        <ResponsiveAdUnit
          publisherId="ca-pub-5476404733919333"
          slotId="6617253971"
          type="after-home-hero" />
      </div>
      <p className="text-center text-xs font-thin">
        Източник на информацията: Официални регистри на Националната агенция по
        приходите и Комисия за защита на личните данни.
      </p>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page as string;
  const p = page ? page.split("_") : [null, "1"];
  const pagenum = p ? Number(p[1]) : 1;

  const cats = await db.view("company/companiesbg", {
    stale: "ok",
    keys: '["София","Варна","Пловдив","Бургас","Русе","Стара Загора","Благоевград","Плевен","Добрич","Хасково","Сливен","Велико Търново","Шумен","Пазарджик","Петрич","Перник","Ямбол","Габрово","Враца","Асеновград","Кюстендил","Кърджали","Сандански","Несебър","Казанлък","Монтана","Димитровград","Видин","Търговище","Смолян","Ловеч","Силистра","Разград","Самоков","Дупница","Гоце Делчев","Горна Оряховица","Поморие","Троян","Севлиево","Свиленград","Велинград","Карлово","Ботевград","Харманли","Свищов","Айтос","Нова Загора","Банско","Разлог","Елхово","Бяла","Лом","Карнобат","Пещера","Балчик","Панагюрище","Раковски","Свети Влас","Созопол","Първомай","Банкя","Костинброд","Радомир","Попово","Нови Искър","Павликени","Каварна","Провадия","Чирпан","Елин Пелин","Нови пазар","Мездра","Бяла Слатина","Трявна","Ихтиман","Раднево","Червен бряг","Царево","Берковица","Стамболийски","Сливница","Приморско","Момчилград","Равда","Костенец","Левски","Дулово","Дряново","Козлодуй","Средец","Исперих","Гълъбово","Девня","Аксаково","Тетевен","Омуртаг","Симитли","Луковит","Етрополе"]',
    cache: "ok",
    update: false,
    reduce: true,
    group: true,
  });
  const sortedcats = cats.rows
    .sort((a: { value: number }, z: { value: number }) => z.value - a.value)
    .slice(0, 100)
    .map((item: { slug: string; key: string; value: number }) => {
      return {
        slug: slugify(item.key),
        althref: slugify(item.key) + "_1",
        id: item.key,
        cat: item.key,
        count: item.value,
      };
    });
  if (p[0]) {
    const selected = sortedcats.find(
      (x: { slug: string; id: string }) => x.slug === p[0]
    );
    const skip = pagenum * 100 - 100;
    const cat = await db.view("company/companiesbg", {
      key: selected.cat,
      limit: 100,
      skip,
      update: false,
      reduce: false,
    });
    const agregate = await db.view("company/companiesbg", {
      key: selected.cat,
      cache: true,
      update: false,
      stale: "ok",
      reduce: true,
    });

    return {
      props: {
        cats: [],
        slug: p[0],
        pagenum,
        items: agregate.value,
        cat: cat.rows,
      },
    };
  } else {
    return {
      props: {
        cats: sortedcats,
      },
    };
  }
};
export default Index;
