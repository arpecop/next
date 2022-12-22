import type { GetServerSideProps } from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";

import { useFacebookRandom } from "@/components/hooks/facebook";
import { useState } from "react";
import FacebookShare from "../../components/FacebookShare";
import LoadingResult, { ResultWrapper } from "../../components/LoadingResult";

export type FbApp = {
	count: number;
	slug: string;
	cat: string;
	description?: string;
	button?: string;
	isLoginOptional?: boolean;
	isLoginRequired?: boolean;
};

const Facebook = ({
	cats,
	result,
	appid,
	shareid,
}: {
	cats: FbApp[];
	result?: {
		appid: string;
		id: string;
		title: string;
		description: string;
		image: string;
	};
	appid?: string;
	shareid?: string;
}) => {
	const app = apps.find((app) => app.slug === appid) as FbApp | undefined;
	const [imageLoaded, setImageLoaded] = useState<boolean>(false);
	const pre = useFacebookRandom(app);
	//<LoadingResult name={pre?.name} />
	return (
		<Main
			meta={
				<Meta
					title={result?.title || app?.cat || "Фейсбук приложения"}
					description={
						result?.description || app?.description || "Фейсбук приложения"
					}
					image={
						shareid
							? `https://kloun.lol/api/facebook/img/${appid}/${shareid}.png`
							: "https://kloun.lol/images/og.jpg"
					}
					noIndex={shareid}
				/>
			}
		>
			{!imageLoaded && app?.cat && (
				<LoadingResult name={pre.error || app?.cat} />
			)}
			{pre.id && !pre.error && (
				<ResultWrapper>
					<img
						src={`/api/facebook/img/${pre.slug}/${pre.id}.png`}
						alt=''
						onLoad={() => setImageLoaded(true)}
					/>
				</ResultWrapper>
			)}
			<div className='flex justify-center items-center my-3'>
				<FacebookShare
					disabled={pre.id && !pre.error ? false : true}
					text={app?.button}
					id={"https://kloun.lol/fb/" + pre.slug + "/" + pre.id}
				/>
			</div>
			<p>{pre.description}</p>
			<ins
				className='adsbygoogle jokewrap'
				style={{ display: "block", textAlign: "center" }}
				data-ad-layout='in-article'
				data-ad-format='fluid'
				data-ad-client='ca-pub-5476404733919333'
				data-ad-slot='1374619867'
			/>
			<Nav cats={cats} prefix='fb' />
			<div className='my-10 flex w-full flex-col'>
				<div className='flex flex-wrap' />
			</div>
		</Main>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { appid, id } = context.query;
	console.log(context.query);

	return {
		props: {
			cats: apps.filter((cat) => cat.slug !== appid),
			appid: appid || null,
			shareid: id || null,
		},
	};
};

const apps = [
	{
		cat: "Баница с късмети за коледа 2022",
		slug: "banicak",
		count: 2022,
		covertheme: "/images/cmass2022.jpg",
		controls: ["preresult"],
		description:
			"Баницата с удачни амулети е традиция в България, която се спазва на Рождество. Тя се прави от тесто, което се разправя в тава и се пълни с различни вкусности, като сирене, яйца, чесън и лук. В тавата се скриват удачни амулети, като златно монети, златни колела или някакви други символи на спечелване. Те се разпределят случайно по тавата, а хората се надяват да хвърлят кости и да спечелят амулета, който ще им принесе удача през новата година.",
	},
	{
		cat: "Новогодишна Баница 2023",
		slug: "banican",
		count: 2023,
		covertheme: "/images/2023.jpg",
	},
	{
		cat: "На колко години изглеждаш",
		slug: "godini",
		button: "Провери на колко изглеждаш",
		isLoginRequired: true,
	},
	{
		cat: "Провери значението на името си",
		slug: "assbg_BG",
	},
	{
		cat: "Добър или лош си днес",
		slug: "goodbad",
		isLoginRequired: true,
	},
	{
		cat: "На коя известна личност приличаш",
		slug: "celeb",
	},
	{
		cat: "Изтегли си късметче",
		slug: "iztegli",
	},
	{
		cat: "Индиянското ти име",
		slug: "indianskoime",
	},
	{
		cat: "Виж коя известна личност ти подхожда",
		slug: "podhojda",
	},
	{ cat: "Какво е японското ти име", slug: "iaponskoime" },
	{ cat: "Провери какъв си бил в предишен живот", slug: "predishenjivot" },
];

export default Facebook;
