import { nanoid } from "nanoid";
import type { GetServerSideProps } from "next";

import FacebookShare from "@/components/FacebookShare";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";
import { useEffect } from "react";

import Cookies from "../../components/Cookies";
import { useFacebookRandom } from "../../components/hooks/facebook";

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
	app,
}: {
	cats: FbApp[];
	result?: { appid: string; id: string; title: string; description: string };
	app?: FbApp;
}) => {
	const rditem = useFacebookRandom(app);

	useEffect(() => {
		const shid = nanoid(5);
		if (rditem.rditem >= 0) {
			const result = {
				id: shid,
				...app,
				result: rditem.rditem,
				type: "facebook",
				cat: app?.slug,
			};
			console.log(result);
		}
	}, [rditem]);

	return (
		<Main
			meta={
				<Meta
					title={result?.title || app?.cat || "Фейсбук приложения"}
					description={result?.description || "Фейсбук приложения"}
				/>
			}
		>
			<div className='flex  justify-center items-center  rounded-md px-2 mx-auto w-full'>
				{app && (
					<div>
						{!app.button ? (
							<div>
								<h1 className='text-5xl font-thin text-center'>{app.cat}</h1>
							</div>
						) : (
							<h1 className='text-5xl font-thin text-center'>{app.cat}</h1>
						)}

						<FacebookShare text={app?.button} />
					</div>
				)}
			</div>
			<Nav cats={cats} prefix='fb' />
			<div className='my-10 flex w-full flex-col'>
				<div className='flex flex-wrap' />
			</div>
			{rditem.seen === false && <Cookies />}
		</Main>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { appid } = context.query;

	const cats = [
		{
			cat: "Баница с късмети за коледа 2022",
			slug: "banicak2022",
			count: 2022,
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

	return {
		props: {
			cats: cats.filter((cat) => cat.slug !== appid),
			app: cats.find((x) => x.slug === appid) || null,
		},
	};
};
export default Facebook;
