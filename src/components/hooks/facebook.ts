import { FbApp } from "@/pages/facebook/facebook";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../utils/cookies";
export type FBResult = {
	[key: string]: string | undefined | boolean;
};

export function useFacebookRandom(app?: FbApp) {
	const [selectedapp, setSelectedApp] = useState<FbApp | undefined>();
	const [seen, setSeen] = useState<boolean>(true);
	const [item, setItem] = useState<FBResult>({
		id: nanoid(5),
		type: "facebook",
		cat: app?.slug,
	});

	useEffect(() => {
		setSelectedApp(app);
	}, []);
	useEffect(() => {
		const rdcoki = getCookie(app?.slug || "main");

		//setRditem(JSON.parse(rdcoki || "{}"));
		const chooseRandomJustIncase = async () => {
			const res2 = await fetch(`/api/facebook/${app?.slug}/`);
			const data = await res2.json();

			setCookie(app!.slug, JSON.stringify(data));
			setItem({ ...selectedapp, ...item, ...data, seen });
		};

		if (selectedapp && !rdcoki) {
			chooseRandomJustIncase();
		} else {
			setItem({ ...selectedapp, ...item, ...JSON.parse(rdcoki || "{}") });
			console.log("already have refreshing");
		}
	}, [selectedapp]);

	useEffect(() => {
		console.log(item);
	}, [item]);

	return item;
}
