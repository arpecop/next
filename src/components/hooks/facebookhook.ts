import { FbApp } from "@/pages/facebook/facebookindex";

import { SetStateAction, useEffect, useState, useRef } from "react";
import { doMutation, doQuery, gql } from "@/pages/api/graphql";
import { throttle } from "lodash";

export type FBResult = {
	[key: string]: string | number;
};

export async function loadImage(imageUrl: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => resolve();
		image.onerror = reject;
		image.src = imageUrl;
	});
}
export const getKasmet = async (id: string) => {
	const get = await doQuery(
		gql`
      query MyQuery($id: String!) {
        getDdb(id: $id) {
          data
        }
      }
    `,
		{
			id,
		}
	);

	return JSON.parse(get.data);
};
export const insertKasmet = async (id: string, data: string) => {
	const d = await doMutation(
		gql`
      mutation MyMutation($id: String!, $data: AWSJSON) {
        createDdb(
          input: {id: $id, subcat: $id, data: $data, nid: "A", deepness: 1}
        ) {
          id
        }
      }
    `,
		{
			id,
			data,
		}
	);
	return d;
};
export const getCookie = (key: string) =>
	document.cookie.split("; ").reduce((total, currentCookie) => {
		const item = currentCookie.split("=");
		const storedKey = item[0];
		const storedValue = item[1];
		return key === storedKey ? decodeURIComponent(storedValue) : total;
	}, "");

export const setCookie = (key: string, value: string | number) => {
	const now = new Date();
	now.setTime(now.getTime() + 10 * 60 * 60 * 24 * 1000);
	document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
};

export function useFacebookRandom(app?: FbApp) {
	const cookiprefix = "v2";
	const [result, setResult] = useState<number | null>(null);
	const [mod, setMod] = useState<FBResult | null>(null);

	function randomNumber(max: number) {
		return Math.floor(Math.random() * max);
	}

	const throttled = useRef(
		throttle((newValue) => {
			insertKasmet("test", JSON.stringify(newValue)).then((d) => {
				setCookie("result", d.id);
			});
		}, 1500)
	);

	useEffect(() => throttled.current(mod), [mod]);

	useEffect(() => {
		const rdcoki = getCookie(app?.slug + "" + cookiprefix);
		const retrieveOld = async (data: number) => {
			await loadImage(`/fbapps/${app?.slug}/back.png`);
			await loadImage(
				`/api/facebook/${app?.slug}/svg/${rdcoki}/res/${rdcoki}/`
			);
			setResult(data);
		};

		const chooseRandomJustIncase = async () => {
			const id = randomNumber(app?.items || 0);

			setCookie(`${app?.slug}${cookiprefix}`, id);
			await loadImage(`/fbapps/${app?.slug}/back.png`);
			await loadImage(`/api/facebook/${app?.slug}/svg/${id}/res/${id}/`);
			setResult(id);
		};

		if (app && !rdcoki) {
			chooseRandomJustIncase();
		}

		if (rdcoki) {
			retrieveOld(Number(rdcoki));
		}
	}, [app]);

	return [result, setMod] as [
		number,
		(value: SetStateAction<FBResult>) => void
	];
}
