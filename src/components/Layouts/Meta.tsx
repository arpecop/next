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
					description: "Open Graph Description",
					images: [
						{
							url: "https://www.example.ie/og-image-01.jpg",
							width: 800,
							height: 600,
							alt: "Og Image Alt",
							type: "image/jpeg",
						},
					],
					siteName: "SiteName",
				}}
			/>
		</>
	);
};

export default Meta;
