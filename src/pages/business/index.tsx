import type {GetServerSideProps} from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";

import {Cat, slugify} from "../../utils/formatter";
import {businessdata} from "../../utils/formatter";
import db from "@/data/client";

export type Company = {
  _id: string;
  name: string;
  zip: number;
  location: string;
  uid?: string;
  created_at: number;
};

const Index = ({cats}: {cats: Cat[]}): JSX.Element => {
  return (
    <Main meta={<Meta title="Бизнес фирми" description="Бизнес фирми" />}>
      <Nav cats={cats} prefix="business" limit={50} />
      <div className="my-10 flex w-full flex-col">
        <div className="flex flex-wrap" />
      </div>
      <p className="text-center text-xs font-thin">
        Източник на информацията: Официални регистри на Националната агенция по
        приходите и Комисия за защита на личните данни.
      </p>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pagenum = context.query.page ? Number(context.query.page) : 1;

  const cats = await db.view("company/companiesbg", {
    stale: "ok",
    keys: '["София","Варна","Пловдив","Бургас","Русе","Стара Загора","Благоевград","Плевен","Добрич","Хасково","Сливен","Велико Търново","Шумен","Пазарджик","Петрич","Перник","Ямбол","Габрово","Враца","Асеновград","Кюстендил","Кърджали","Сандански","Несебър","Казанлък","Монтана","Димитровград","Видин","Търговище","Смолян","Ловеч","Силистра","Разград","Самоков","Дупница","Гоце Делчев","Горна Оряховица","Поморие","Троян","Севлиево","Свиленград","Велинград","Карлово","Ботевград","Харманли","Свищов","Айтос","Нова Загора","Банско","Разлог","Елхово","Бяла","Лом","Карнобат","Пещера","Балчик","Панагюрище","Раковски","Свети Влас","Созопол","Първомай","Банкя","Костинброд","Радомир","Попово","Нови Искър","Павликени","Каварна","Провадия","Чирпан","Елин Пелин","Нови пазар","Мездра","Бяла Слатина","Трявна","Ихтиман","Раднево","Червен бряг","Царево","Берковица","Стамболийски","Сливница","Приморско","Момчилград","Равда","Костенец","Левски","Дулово","Дряново","Козлодуй","Средец","Исперих","Гълъбово","Девня","Аксаково","Тетевен","Омуртаг","Симитли","Луковит","Етрополе"]',
    cache: true,
    reduce: true,
    group: true,
  });
  const sortedcats = cats.rows
    .sort((a: {value: number}, z: {value: number}) => z.value - a.value)
    .slice(0, 100)
    .map((item: {slug: string; key: string; value: number}) => {
      return {
        slug: slugify(item.key),
        althref: "1_" + slugify(item.key),
        id: item.key,
        cat: item.key,
        count: item.value,
      };
    });

  return {
    props: {
      cats: sortedcats,
    },
  };
};
export default Index;
