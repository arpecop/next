import { FbApp } from "@/pages/facebook/facebookindex";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { doMutation, doQuery, gql } from "../../data/client";
import { getCookie, setCookie } from "../../utils/cookies";
export type FBResult = {
	[key: string]: string | undefined;
};

export async function loadImage(imageUrl: string): Promise<void> {
	console.log("image" + imageUrl);
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => resolve();
		image.onerror = reject;
		image.src = imageUrl;
	});
}

export function useFacebookRandom(app?: FbApp) {
	const [selectedapp, setSelectedApp] = useState<FbApp | undefined>();
	const [item, setItem] = useState<FBResult>({});

	useEffect(() => {
		setSelectedApp(app);
	}, []);

	useEffect(() => {
		const rdcoki = getCookie(app?.slug || "main");
		const retrieveOld = async (appid: string, id: string) => {
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
				setItem({
					...JSON.parse(raw.data as string),
					id: raw.id,
				});
			}
		};

		const chooseRandomJustIncase = async () => {
			const id = nanoid(5);
			const res2 = await fetch(`/api/facebook/items/${app?.slug}/`);
			const data = await res2.json();
			const newdata = { ...selectedapp, ...item, ...data };
			newdata.description = "";
			setCookie(app!.slug, id);

			const insert = await doMutation(
				gql`
          mutation MyMutation($id: String!, $data: AWSJSON) {
            createDdb(
              input: {
                id: $id
                subcat: $id
                data: $data
                nid: "A"
                deepness: 1
              }
            ) {
              id
            }
          }
        `,
				{
					id,
					data: JSON.stringify(newdata),
				}
			);

			setItem({ ...newdata, id: insert.id });
		};

		if (selectedapp && !rdcoki) {
			chooseRandomJustIncase();
		}

		if (rdcoki) {
			retrieveOld(app!.slug, rdcoki);
		}
	}, [selectedapp]);

	return item;
}
