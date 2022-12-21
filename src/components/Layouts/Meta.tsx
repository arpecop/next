import { AppConfig } from "@/utils/AppConfig";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

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
	const canonicalURL = AppConfig.prefix + useRouter().asPath;
	const title = props.title
		.replace(/\s+/g, " ")
		.replace(/\n/g, " ")
		.slice(0, 60);

	return (
		<>
			<Head>
				<meta charSet='UTF-8' key='charset' />
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
				></script>
			</Head>
			<NextSeo
				title={title}
				description={props.description}
				canonical={canonicalURL}
				facebook={{
					appId: "281985576166744",
				}}
				openGraph={{
					url: canonicalURL,
					title: title,
					description: props.description,
					images: props.image
						? [
							{
								url: props.image,
								width: 1200,
								height: 630,
								alt: title,
								type: "image/png",
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
		</>
	);
};

export default Meta;
