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
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			</Head>
			<NextSeo
				title={title}
				description={props.description}
				canonical={canonicalURL}
				facebook={{
					appId: "281985576166744",
				}}
			/>
		</>
	);
};

export default Meta;
