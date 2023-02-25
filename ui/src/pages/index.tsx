import Search from "@/components/ads/Search";
import Layout from "@/components/Main";
import dynamic from "next/dynamic";

import AnimIndexProducts from "../components/elements/AnimIndexProducts";
import Link from "next/link";
import loadStaticFile from "@/components/helpers/loadStaticFile";
import CatButton from "@/components/ads/CatButton";

const NotificationPermission = dynamic(
  () => import("@/components/Notifications"),
  {
    ssr: false,
  }
);

export default function Home({
  cats,
}: {
  cats: {
    name: string;
    icon: string;
    description?: string;
    color: string;
    slug: string;
  }[];
}) {
  return (
    <Layout>
      <div className="grow container mx-auto z-20">
        <AnimIndexProducts />
        <Search />
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-2xl max-w-md md:text-3xl lg:text-5xl lg:max-w-2xl pb-4">
            пусни за продажба практически всичко за{" "}
            <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
              {" "}
              което се сетиш.
            </span>
          </h2>
          <p className="text opacity-90 max-w-sm lg:text-xl lg:max-w-2xl">
            ezikTok e сайт за безплатни обяви в категории: Недвижими имоти,
            Автомобили и авточасти, Eлектроника, Мода, За бебето и детето, Дом и
            градина, Свободно време, Домашни любимци, Услуги, Работа, Екскурзии
            и почивки. В езикТок можете да намерите интересни обяви за продажба
            на почти всичко, което търсите. Свържете се лесно и бързо с
            продавача и намерете атрактивни предложения на по-ниски цени
            отколкото в магазина. Ако искате да продадете нещо, добавете бързо,
            лесно и безплатно обява в езикТок. Купувайте и продавайте с езикТок!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mt-4 max-w-screen-md mx-auto">
          {cats.map((item) => (
            <CatButton
              {...item}
              key={item.slug}
              url={`/ads/cat/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const adsData = await loadStaticFile("adsData");
  return {
    props: {
      cats: adsData.map((x) => ({
        name: x.name,
        slug: x.slug,
        color: x.color,
        icon: x.icon,
      })),
      date: new Date().toString(),
    },
  };
}
