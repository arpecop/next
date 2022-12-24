import CatButton from '@/components/ads/CatButton';
import { queries } from '@/components/db';

import { AdsDataSchema, SideBarContainer } from '/pages/ads';

import { API, graphqlOperation } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import AdItem from '@/components/ads/AdItem';
import Layout from '@/components/Main';
import loadStaticFile from '@/components/helpers/loadStaticFile';
import { Ad } from 'src/API';

const CatId = ({
  data,
  items,
}: {
  data: AdsDataSchema;
  items: [Ad];
  catid: string;
}) => {
  return (
    <Layout
      title={`Обяви за ${data.name}`}
      description={data.description || data.name}
      disableContainer={true}
    >
      <SideBarContainer>
        {data.items.map((item) => (
          <CatButton
            {...item}
            key={item.slug}
            url={`/ads/cat/${data.slug}/${item.slug}`}
            color={data.color}
          />
        ))}
      </SideBarContainer>

      <div className='w-full'>
        <h1 className='text-5xl leadingtext'>{data.name}</h1>
        <p>{data.description}</p>
        <div className='flex justify-end'>
          <Link href={`/ads/create/${data.slug}/`} className='btn'>
            Пусни обява тук
          </Link>
        </div>
      </div>

      <div className='grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5'>
        {items.map((item) => (
          <AdItem key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { catid } = query;
  const adsData = await loadStaticFile('adsData');
  const data = adsData.find((x) => x.slug === catid) as AdsDataSchema;
  const items = await API.graphql(
    graphqlOperation(queries.byCat, {
      sortDirection: 'ASC',
      bycat:
        process.env.NODE_ENV === 'development' ? `${catid}ad1` : `${catid}ads`,

      limit: 30,
    }),
  );

  return {
    props: { data, items: items.data.adsBySortID.items, catid },
  };
};

export default CatId;
