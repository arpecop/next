import type { GetServerSideProps } from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";
import FacebookShare from "../../components/FacebookShare";

export type FbApp = {
	count: number;
	slug: string;
	cat: string;
	button?: string;
	isLoginOptional?: boolean;
	isLoginRequired?: boolean;
};

const Index = ({
	cats,
	result,
	app,
}: {
	cats: FbApp[];
	result?: { appid: string; id: string; title: string; description: string };
	app?: FbApp;
}): JSX.Element => {
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
								<h1 className='text-4xl font-black text-center'>{app.cat}</h1>
							</div>
						) : (
							<h1 className='text-4xl font-black text-center'>{app.cat}</h1>
						)}
						<FacebookShare text={app?.button} />
					</div>
				)}
			</div>
			<Nav cats={cats} prefix='fb' />
			<div className='my-10 flex w-full flex-col'>
				<div className='flex flex-wrap' />
			</div>
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
			slug: "goodvsbad",
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
export default Index;
//v 1.0
