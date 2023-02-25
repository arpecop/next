import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  url?: string;
  cat?: string;
  imgtype?: string;
  keywords?: string;
};

const Meta = (props: IMetaProps) => {
  const canonicalURL = `https://eziktok.com${useRouter().asPath}`;
  const title = props.title
    .replace(/\s+/g, ' ')
    .replace(/\n/g, ' ')
    .slice(0, 60);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
          key='viewport'
        />
        <link rel='icon' href='/favicon.ico' key='favicon' />
        <link
          rel='preload'
          href='/font/Nunito-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/font/Ember.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/font/Nunito-Bold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/font/Nunito-ExtraLight.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/font/12a98aeede84cc93a1c30d486433c810.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <NextSeo
        title={title}
        description={props.description}
        canonical={canonicalURL}
        facebook={{
          appId: '281985576166744',
        }}
        openGraph={
          props.image
            ? {
                title,
                description: props.description,
                url: canonicalURL,
                locale: 'bg',
                site_name: 'eziktok',
                type: 'article',
                article: {
                  publishedTime: '2022-06-30T00:00:00+00:00',
                  modifiedTime: '2022-06-30T00:00:00+00:00',
                  section: props.cat ? props.cat : 'Разни',
                  tags: ['Виц', props.cat ? props.cat : 'Разни'],
                },
                images: [
                  {
                    width: 2136,
                    height: 1097,
                    type: props.imgtype ? props.imgtype : 'image/png',
                    alt: 'Виц',
                    url: props.image,
                  },
                ],
              }
            : undefined
        }
      />
    </>
  );
};

export default Meta;
