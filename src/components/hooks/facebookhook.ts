import { FbApp } from "@/pages/facebook/facebookindex";

import { useEffect, useState } from "react";
import { doMutation, doQuery, gql } from "@/pages/api/graphql";

export type FBResult = {
	[key: string]: string | undefined;
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
        queryDdbsByBySubcat(subcat: $id, first: 1) {
          nextToken
          items {
            id
            data
          }
        }
      }
    `,
		{
			id,
		}
	);
	return JSON.parse(get.items[0].data);
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

export function useFacebookRandom(app?: FbApp) {
	const cookiprefix = "v2";
	const [result, setResult] = useState<number | null>(null);

	const getCookie = (key: string) =>
		document.cookie.split("; ").reduce((total, currentCookie) => {
			const item = currentCookie.split("=");
			const storedKey = item[0];
			const storedValue = item[1];
			return key === storedKey ? decodeURIComponent(storedValue) : total;
		}, "");

	const setCookie = (key: string, value: string | number) => {
		const now = new Date();
		now.setTime(now.getTime() + 10 * 60 * 60 * 24 * 1000);
		document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
	};

	function randomNumber(max: number) {
		return Math.floor(Math.random() * max);
	}

	useEffect(() => {
		const rdcoki = getCookie(app?.slug + "" + cookiprefix);
		const retrieveOld = async (data: string) => {
			console.log(data);
			const raw = JSON.parse(data);

			await loadImage(`/fbapps/${app?.slug}/back.png`);
			await loadImage(
				`/api/facebook/${app?.slug}/svg/${raw.id}/res/${raw.id}/`
			);
			setResult({
				id: raw.id,
				...raw,
			});
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
			retrieveOld(rdcoki);
		}
	}, [app]);
	return result;
	// return [result, setResult] as [
	// 	{ error?: string; id: string },
	// 	(value: SetStateAction<{ error?: string; id: string }>) => void
	// ];
}
