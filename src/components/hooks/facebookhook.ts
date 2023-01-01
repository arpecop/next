import { FbApp } from "@/pages/facebook/facebookindex";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { doMutation, doQuery, gql } from "@/pages/api/graphql";
import { getCookie, setCookie } from "../../utils/cookies";
import { shuffle } from "lodash";
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
	const cookiprefix = "v1";
	const [result, setResult] = useState<{ id?: string; error?: string }>({});

	useEffect(() => {
		const rdcoki = getCookie(app?.slug + "" + cookiprefix || "main");
		const retrieveOld = async (id: string) => {
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

			if (get.items[0]) {
				const raw = get.items[0];
				await loadImage(
					`/api/facebook/${app?.slug}/svg/${raw.id}/res/${raw.id}/`
				);
				setResult({
					id: raw.id,
					...JSON.parse(raw.data),
				});
			}
		};

		const chooseRandomJustIncase = async () => {
			const id = nanoid(5);
			const res2 = await fetch(`/fbapps/${app?.slug}/items.json`);
			const data = await res2.json();
			console.log(data);
			setCookie(`${app?.slug}${cookiprefix}`, id);
			const d = await insertKasmet(id, JSON.stringify(shuffle(data)[0]));
			await loadImage(`/api/facebook/${app?.slug}/svg/${d.id}/res/${d.id}/`);
			setResult(d);
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
