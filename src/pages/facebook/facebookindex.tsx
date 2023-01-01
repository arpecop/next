import type { GetServerSideProps } from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";

import FacebookShare from "@/components/FacebookShare";
import {
	FBResult,
	getCookie,
	useFacebookRandom,
} from "@/components/hooks/facebookhook";

import LoadingResult, { ResultWrapper } from "@/components/LoadingResult";

import { useState } from "react";

import validator from "@rjsf/validator-ajv8";
import { RJSFSchema } from "@rjsf/utils";
import Form from "@rjsf/core";
import { mapValues, merge } from "lodash";

import { nanoid } from "nanoid";

export type FbApp = {
	count: number;
	slug: string;
	cat: string;
	description?: string;
	button?: string;
	isLoginOptional?: boolean;
	isLoginRequired?: boolean;
	items: number;
	schema: RJSFSchema;
	hidden?: boolean;
};

const Facebook = ({
	cats,
	result,
	appid,
	shareid,
	app,
}: {
	cats: FbApp[];
	app?: FbApp;
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
	const [form, setForm] = useState<RJSFSchema>(app?.schema || {});
	const [urlparams, setUrlparams] = useState<{
		params: string;
		refreshid: string;
	}>({ params: "?", refreshid: "default" });
	const [shareidclient, setShareId] = useState<string>("");
	const [curresult, setResult] = useFacebookRandom(app);
	const formDatax = (formd: FBResult) => {
		const values = mapValues(formd, (val) => ({ ["default"]: val }));
		const properties = merge(form?.properties, values);
		const queryString = Object.keys(formd)
			.map((key) => key + "=" + formd[key])
			.join("&");

		setForm({ ...form, properties });
		setResult(formd);

		setUrlparams({
			refreshid: nanoid(3),
			params: "?" + queryString,
		});
	};

	const onBeforeLoad = () => {
		return new Promise((resolve) => {
			const id = getCookie("result");
			resolve(`https://kloun.lol/fb/${app?.slug}/${id}`);
		});
	};

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
							? `https://kloun.lol/api/facebook/${appid}/svg/${shareid}/img`
							: "https://kloun.lol/images/og.jpg"
					}
					noIndex={shareid}
				/>
			}
		>
			<div className="flex justify-center items-center">
				{curresult && (
					<ResultWrapper>
						<div className="relative flex bg">
							<img className="w-full h-full" src="/images/placeholder.png" />
							<div className="flex absolute top-0 w-full">
								<img
									src={`/fbapps/${app?.slug}/back.png`}
									alt=""
									className="w-full"
								/>
							</div>
							<img
								src={`/api/facebook/${app?.slug}/svg/${curresult}/res/${curresult}/${urlparams.params}`}
								alt=""
								className="absolute top-0 w-full"
							/>
						</div>
					</ResultWrapper>
				)}
				{!curresult && app && <LoadingResult name={app?.cat} />}
			</div>

			{app?.schema && (
				<div
					className={`flex justify-center items-center ${curresult ? "blur-none" : "blur-sm"
						}`}
				>
					<Form
						schema={form}
						validator={validator}
						onChange={(x) => formDatax(x.formData)}
					//onChange={(x) => formData(x.formData)}
					/>
				</div>
			)}

			<div className="container mx-auto">
				{app && (
					<div>
						<div className="flex justify-center items-center my-3">
							<FacebookShare
								onbeforeSubmit={onBeforeLoad}
								disabled={curresult ? false : true}
								text={app?.button}
								id={`https://kloun.lol/fb/${app?.slug}/${shareidclient}`}
							/>
						</div>
						<p>{app?.description}</p>
					</div>
				)}
				<ins
					className="adsbygoogle"
					style={{ display: "block", textAlign: "center" }}
					data-ad-layout="in-article"
					data-ad-format="fluid"
					data-ad-client="ca-pub-5476404733919333"
					data-ad-slot="1374619867"
				/>
				<Nav cats={cats} prefix="fb" />
				<div className="my-10 flex w-full flex-col">
					<div className="flex flex-wrap" />
				</div>
			</div>
		</Main>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { appid, id } = context.query;
	const app = apps.find((app) => app.slug === appid);
	return {
		props: {
			cats: apps.filter((cat) => cat.slug !== appid && !cat.hidden),
			appid: appid || null,
			shareid: id || null,
			app: app || null,
		},
	};
};

const apps = [
	{
		cat: "Новогодишна Баница 2023",
		slug: "banica2023",
		count: 2023,
		covertheme: "/images/2023.jpg",
		items: 40,
		schema: {
			title: "Персонализирай",
			type: "object",
			properties: {
				firstname: { type: "string", title: "Напиши името си", default: "" },
			},
		},
		description:
			"Баницата с удачни амулети е традиция в България, която се спазва на Рождество. Тя се прави от тесто, което се разправя в тава и се пълни с различни вкусности, като сирене, яйца, чесън и лук. В тавата се скриват удачни амулети, като златно монети, златни колела или някакви други символи на спечелване. Те се разпределят случайно по тавата, а хората се надяват да хвърлят кости и да спечелят амулета, който ще им принесе удача през новата година.",
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
		hidden: true,
	},
	{
		cat: "На коя известна личност приличаш",
		slug: "celeb",
		hidden: true,
	},
	{
		cat: "Изтегли си късметче",
		slug: "iztegli",
		hidden: true,
	},
	{
		cat: "Индиянското ти име",
		slug: "indianskoime",
		hidden: true,
	},
	{
		cat: "Виж коя известна личност ти подхожда",
		slug: "podhojda",
		hidden: true,
	},
	{ cat: "Какво е японското ти име", slug: "iaponskoime", hidden: true },
	{
		cat: "Провери какъв си бил в предишен живот",
		slug: "predishenjivot",
		hidden: true,
	},
];
export const runtime = "experimental-edge";
export default Facebook;
