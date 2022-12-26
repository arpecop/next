import AdItem from "@/components/ads/AdItem";
import CatButton from "@/components/ads/CatButton";

import Layout from "@/components/Main";

import { GetServerSideProps } from "next";
import { ReactNode } from "react";

import loadStaticFile from "@/components/helpers/loadStaticFile";

export type Field = {
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  options?: string[];
  after?: string;
  value?: string;
  ref?: HTMLInputElement;
};

export type AdsDataSubcat = {
  name: string;
  slug: string;
  parrent: string;
  description?: string;
  hidedescription?: boolean;
  hideprice?: boolean;
  fields: Field[];
};

export type AdsDataSchema = {
  name: string;
  slug: string;
  icon: string;
  color: string;
  description?: string;
  items: AdsDataSubcat[];
};

export default function AdsHome({
  cats,
  items,
}: {
  cats: {
    name: string;
    icon: string;
    description?: string;
    color: string;
    slug: string;
  }[];
  items: any;
}) {
  return (
    <Layout disableContainer={true}>
      <SideBarContainer>
        {cats.map((item) => (
          <CatButton {...item} key={item.slug} url={`/ads/cat/${item.slug}`} />
        ))}
      </SideBarContainer>
      <AdsContainer>
        {items?.map((item: any) => (
          <AdItem key={item.id} {...item} />
        ))}
      </AdsContainer>
    </Layout>
  );
}
export const SideBarContainer = ({ children }: { children: ReactNode }) => (
  <div className='rounded-md order-last md:order-first justify-center  w-full  md:max-w-xs  '>
    <div className='flex flex-col md:flex-row '>
      <div className='rounded-md px-2 order-first'>{children}</div>
      <div className='md:w-full m-2 rounded-md shrink bg-gradient-to-l md:bg-gradient-to-b from-fuchsia-500 via-red-600 to-orange-400 mr-2 dark:from-sky-400 dark:via-rose-400 dark:to-lime-400  order-first md:order-last flex-1 p-1 ' />
    </div>
  </div>
);

export const AdsContainer = ({ children }: { children: ReactNode }) => (
  <div>
    <div className='grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5'>
      {children}
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const adsData = await loadStaticFile("adsData");
  console.log(adsData);
  return {
    props: {
      cats: adsData.map((x) => ({
        name: x.name,
        slug: x.slug,
        color: x.color,
        icon: x.icon,
      })),
      items: [],
    },
  };
};
export const config = {
  runtime: "experimental-edge",
};
