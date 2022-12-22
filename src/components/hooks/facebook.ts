import { FbApp } from "@/pages/facebook/facebook";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { doMutation, doQuery, gql } from "../../data/client";
import { getCookie, setCookie } from "../../utils/cookies";
export type FBResult = {
	[key: string]: string | undefined;
};

export function useFacebookRandom(app?: FbApp) {
	const [selectedapp, setSelectedApp] = useState<FbApp | undefined>();
	const [item, setItem] = useState<FBResult>({});

	useEffect(() => {
		setSelectedApp(app);
	}, []);
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
			console.log(get);
			setItem(JSON.parse(get.items[0].data as string));
		};

		const chooseRandomJustIncase = async () => {
			const id = nanoid(5);
			const res2 = await fetch(`/api/facebook/items/${app?.slug}/`);
			const data = await res2.json();
			const newdata = { ...selectedapp, ...item, ...data };
			newdata.description = "";
			setCookie(app?.slug || "", id);
			try {
				await doMutation(
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
			} catch (e) {
				console.log("xcxxxx", e);
			}
			setItem({ ...newdata, id });
		};

		if (selectedapp && !rdcoki) {
			chooseRandomJustIncase();
		}

		if (rdcoki) {
			retrieveOld(rdcoki);
		}
	}, [selectedapp]);

	return item;
}
