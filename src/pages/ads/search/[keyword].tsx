import AdItem from "@/components/ads/AdItem";

import { createSlug } from "@/components/helpers/slug";
import Layout from "@/components/Main";

import { NextApiRequest } from "next";
import { Ad } from "src/API";

import loadStaticFile from "@/components/helpers/loadStaticFile";
import { AdsContainer, AdsDataSchema, Field } from "..";

const CatId = ({
  current,
  items,
  keywords,
}: {
  current: string;
  keywords: string[];
  maincat: string;
  data: AdsDataSchema;
  items: [Ad];
}) => {
  return (
    <Layout
      disableContainer={false}
      title={current}
      description={keywords.join(" ")}
    >
      <AdsContainer>
        <div className='fullgridcontaineritem'>
          <h1 className='text-5xl -mt-2'>{current}</h1>
        </div>
        {items.map((item) => (
          <AdItem key={item.id} {...item} />
        ))}
      </AdsContainer>
    </Layout>
  );
};

export const getServerSideProps = async (req: NextApiRequest) => {
  const reqs = req.query.keyword as string;
  const subcatid = reqs.split("_");
  const adsData = (await loadStaticFile("adsData")) as {
    items: { name: string; slug: string; fields: Field[] }[];
  }[];

  const data = adsData
    .flatMap((x) => {
      return x.items.map((z) => {
        return {
          name: z.name,
          slug: z.slug,
          fields: z.fields.filter(
            (x) =>
              (x.name === "type" && x.options) ||
              (x.name === "brand" && x.options)
          ),
        };
      });
    })
    .find((x) => x.slug === subcatid[1]);

  const keywords = data?.fields.flatMap((x: Field) => x.options) as string[];
  const current = keywords.filter((word) => {
    return createSlug(word || "") === subcatid[2];
  })[0];

  //const subcat = data.find((x) => x.slug === req.query.subcatid);

  //console.log(filter);

  const items = [] as any;

  return {
    props: { current, keywords, items },
  };
};

export default CatId;
