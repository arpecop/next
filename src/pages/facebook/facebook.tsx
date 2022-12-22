import type { GetServerSideProps } from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";

import Cookies from "@/components/Cookies";
import { useFacebookRandom } from "@/components/hooks/facebook";
import FacebookShare from "../../components/FacebookShare";

export type FbApp = {
	count: number;
	slug: string;
	cat: string;
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
	const pre = useFacebookRandom(app);

	return (
		<Main
			meta={
				<Meta
					title={result?.title || app?.cat || "Фейсбук приложения"}
					description={result?.description || "Фейсбук приложения"}
					image={result?.image}
					noIndex={shareid}
				/>
			}
		>
			{pre.slug && !pre.error ? (
				<div>
					<div className='container  relative overflow-hidden flex justify-center items-center border rounded-xl border-4 border-fuchsia-800'>
						<div className='absolute'>
							<p className='text-4xl md:text-5xl font-thin text-center'>
								{pre.name}
							</p>
						</div>
						<span className='flex h-full w-full absolute hidden'>
							<span className='animate-ping absolute inline-flex h-full w-full rounded-full   opacity-75 bg-fuchsia-800' />
						</span>

						<svg
							className='w-full h-full   mb-4'
							width='1200'
							height='630'
							viewBox='0 0 1200 630'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						/>
					</div>
					{JSON.stringify(pre)}
					<FacebookShare
						text={app?.button}
						id={"https://kloun.lol/fb/" + pre.slug + "/" + pre.id}
					/>
				</div>
			) : (
				<h1 className='text-4xl md:text-5xl font-thin text-center'>
					{pre.error}
				</h1>
			)}
			<Nav cats={cats} prefix='fb' />
			<div className='my-10 flex w-full flex-col'>
				<div className='flex flex-wrap' />
			</div>
			{!pre.seen && <Cookies />}
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
		slug: "banicak2022",
		count: 2022,
		controls: ["preresult"],
	},
	{ cat: "Новогодишна Баница 2023", slug: "banica2023", count: 2023 },
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
