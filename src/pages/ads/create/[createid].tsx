import CatButton from '@/components/ads/CatButton';
import Layout from '@/components/Main';
import { AdsDataSchema } from '/pages/ads';

import { Ad } from 'src/API';
import loadStaticFile from '@/components/helpers/loadStaticFile';

const CatId = ({ data }: { data: AdsDataSchema; items: [Ad] }) => {
  return (
    <Layout
      title={`Обяви за ${data.name}`}
      description={data.description || data.name}
    >
      <div className='fullgridcontaineritem'>
        <h1 className='text-5xl leadingtext'>{data.name}</h1>

        <p>Моля изберете категория в която искате да публикувате</p>
      </div>
      {data.items.map((item) => (
        <CatButton
          {...item}
          key={item.slug}
          url={`/ads/create/${data.slug}/${item.slug}`}
          color={data.color}
        />
      ))}
    </Layout>
  );
};

export const getServerSideProps = async ({
  query,
}: {
  query: { createid: string };
}) => {
  const { createid } = query;
  const adsData = await loadStaticFile('adsData');
  const data = adsData.find((x) => x.slug === createid) as AdsDataSchema;

  return {
    props: { data },
  };
};

export default CatId;
