import { FbApp } from "@/pages/facebook/facebook";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { doMutation, gql } from "../../data/client";
import { getCookie, setCookie } from "../../utils/cookies";
export type FBResult = {
	[key: string]: string | undefined | boolean;
};

export function useFacebookRandom(app?: FbApp) {
	const [selectedapp, setSelectedApp] = useState<FbApp | undefined>();

	const [item, setItem] = useState<FBResult>({
		id: nanoid(5),
		type: "facebook",
		name: app?.cat,
	});

	useEffect(() => {
		setSelectedApp(app);
	}, []);
	useEffect(() => {
		const rdcoki = getCookie(app?.slug || "main");
		const chooseRandomJustIncase = async () => {
			const res2 = await fetch(`/api/facebook/items/${app?.slug}/`);
			const data = await res2.json();
			const newdata = { ...selectedapp, ...item, ...data };
			const insert = await doMutation(
				gql`
          mutation MyMutation($id: String, $data: AWSJSON) {
            createDdb(
              input: { subcat: $id, data: $data, nid: "A", deepness: 1 }
            ) {
              id
            }
          }
        `,
				{
					id: newdata.id,
					data: JSON.stringify(newdata),
				}
			);
			setCookie(app!.slug, JSON.stringify({ ...newdata, dbid: insert.id }));
			setItem({ ...newdata, dbid: insert.id });
		};

		if (selectedapp && !rdcoki) {
			chooseRandomJustIncase();
		} else {
			setItem({ ...selectedapp, ...item, ...JSON.parse(rdcoki || "{}") });
		}
	}, [selectedapp]);

	return item;
}
