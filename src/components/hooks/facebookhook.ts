import { FbApp } from "@/pages/facebook/facebookindex";
import { nanoid } from "nanoid";
import { useEffect, useState, SetStateAction } from "react";
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

const insert = async (id: string, data: string) => {
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
	const [result, setResult] = useState<{ id?: string; error?: string }>({});

	useEffect(() => {
		const rdcoki = getCookie(app?.slug || "main");
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

				setResult({
					id: raw.id,
					...JSON.parse(raw.data),
				});
			}
		};

		const chooseRandomJustIncase = async () => {
			const id = nanoid(5);
			const res2 = await fetch(`/fb/${app?.slug}/items.json`);
			const data = await res2.json();
			setCookie(app?.slug || "", id);
			const d = await insert(id, JSON.stringify(shuffle(data)[0]));
			setResult(d);
		};

		if (app && !rdcoki) {
			chooseRandomJustIncase();
		}

		if (rdcoki) {
			retrieveOld(rdcoki);
		}
	}, [app]);

	return [result, setResult] as [
		{ error?: string; id: string },
		(value: SetStateAction<{ error?: string; id: string }>) => void
	];
}
