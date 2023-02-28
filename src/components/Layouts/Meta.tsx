import { AppConfig } from "@/utils/AppConfig";
import { NextSeo } from "next-seo";
//import Head from "next/head";
import { encode } from "html-entities";
import { useRouter } from "next/router";
import { profanityRemove } from "../../utils/formatter";
import Script from "next/script";
import Head from "next/head";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imgtype?: string;
  noIndex?: string;
  removeProfanity?: boolean;
};
interface Window {
  adsbygoogle: { [key: string]: unknown }[]
}
const Meta = (props: IMetaProps) => {
  const canonicalURL = AppConfig.prefix + useRouter().asPath;
  let title = props.title.replace(/\s+/g, " ").replace(/\n/g, " ").slice(0, 60);

  let description = props.description
    .replace(/\s+/g, " ")
    .replace(/\n/g, " ")
    .slice(0, 150);

  title = encode(props.removeProfanity ? profanityRemove(title) : title);
  description = encode(
    props.removeProfanity ? profanityRemove(description) : description
  );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalURL.split(/[?#]/)[0]}
        noindex={props.noIndex ? true : false}
        nofollow={props.noIndex ? true : false}
        facebook={{
          appId: "281985576166744",
        }}
        openGraph={{
          url: canonicalURL.split(/[?#]/)[0],
          title: title,
          description: description,
          type: "article",
          images: props.image
            ? [
              {
                url: props.image,
                width: 1200,
                height: 630,
                alt: title,
                type: props.imgtype || "image/png",
              },
            ]
            : [
              {
                url: "https://kloun.lol/images/og.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
                type: "image/jpeg",
              },
            ],
          siteName: "kloun.lol",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <Script id="Adsense-id" async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
      <Head>
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      </Head>

    </>
  );
};

export default Meta;


