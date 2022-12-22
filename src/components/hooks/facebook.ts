import { useEffect, useState } from "react";
import { FbApp } from "../../pages/facebook/facebook";
import { getCookie, setCookie } from "../../utils/cookies";

export function useFacebookRandom(app?: FbApp) {
	const [rditem, setRditem] = useState<number>(-1);
	const [seen, setSeen] = useState<boolean>(true);
	useEffect(() => {
		const rdcoki = getCookie(app?.slug || "main");
		const seen = getCookie("seen");
		setSeen(seen ? true : false);
		setRditem(Number(rdcoki));
		const chooseRandomJustIncase = async () => {
			const res2 = await fetch(`/facebook/${app?.slug}/items.json`);

			const data = await res2.json();
			console.log(typeof data, data.length);

			const index = Math.floor(Math.random() * data.length);
			setCookie(app!.slug, index);
			setRditem(index);
		};

		if (app?.cat && !rdcoki) {
			chooseRandomJustIncase();
		}
	});
	if (!app) {
		return { rditem: -1, seen };
	}
	return { rditem, seen };
}
