import AdItem from '@/components/ads/AdItem';
import { queries } from '@/components/db';
import { convertToTimeago } from '@/components/helpers/date';
import { createSlug } from '@/components/helpers/slug';
import Layout from '@/components/Main';
import { AdsDataSchema, AdsDataSubcat, SideBarContainer } from '/pages/ads';

import { API, graphqlOperation } from 'aws-amplify';
import { NextApiRequest } from 'next';
import Link from 'next/link';
import { Item } from 'src/API';
import loadStaticFile from '@/components/helpers/loadStaticFile';

const CatId = ({
  keywords,
  maincat,
  data,
  items,
}: {
  keywords: string[];
  ut: Date;
  maincat: { name: string; slug: string };
  data: AdsDataSubcat;
  items: [Item];
}) => {
  return (
    <Layout disableContainer={true}>
      <SideBarContainer>
        <div className='flex flex-wrap justify-center items-center'>
          {keywords.map((x) => (
            <Link
              passHref
              className='text-xs bg-slate-800 mx-0.5 text-white rounded-xl px-2 m-1'
              href={`/ads/search/${createSlug(
                `${data.name}-${maincat.name}`,
              )}_${data.slug}_${createSlug(x)}`}
              key={x}
            >
              {x}
            </Link>
          ))}
        </div>
      </SideBarContainer>

      <div className='w-full'>
        <h2 className='text-3xl text-lime-200 dark:text-zinc-600'>
          {maincat.name}
        </h2>
        <h1 className='text-5xl -mt-2'>{data.name}</h1>
        <p>{data.description}</p>
        <div className='flex justify-end'>
          <Link
            href={`/ads/create/${maincat.slug}/${data.slug}/`}
            className='btn'
          >
            Пусни обява тук
          </Link>
        </div>
      </div>
      {items.map((item) => (
        <AdItem key={item.id} {...item} />
      ))}
    </Layout>
  );
};

export const getServerSideProps = async (req: NextApiRequest) => {
  const adsData = await loadStaticFile('adsData');
  const data = adsData.find(
    (x) => x.slug === req.query.catid?.[0],
  ) as AdsDataSchema;
  const subcat = data.items.find((x) => x.slug === req.query.catid?.[1]);
  const fiveMinutesAgo = new Date();
  fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const items = await API.graphql(
    graphqlOperation(queries.adsBySortID, {
      sortID: process.env.NODE_ENV === 'development' ? 'ad1' : 'ads',
      filter: {
        cat: { eq: req.query.catid?.[1] },
      },
      limit: 30,
      // sortDirection: 'DESC',
    }),
  );
  const keywords = subcat?.fields
    .filter(
      (field) =>
        (field.name === 'type' && field.options) ||
        (field.name === 'brand' && field.options),
    )
    .flatMap((x) => x.options)
    .filter((x) => !x?.includes('Друг'));

  //insert();
  return {
    props: {
      keywords,
      data: subcat,
      items: items.data.adsBySortID.items?.map((item: Item) => ({
        ...item,
        createdAt: convertToTimeago(new Date(item.createdAt)),
      })),
      maincat: { name: data.name, slug: data.slug },
    },
  };
};

export default CatId;
