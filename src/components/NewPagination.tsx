import type { FC, ReactElement } from "react";
import { ulid } from "ulidx";

import { doMutation, doQuery, gql } from "../data/client";

interface Props {
	pagenum: number;
	cat: string;
	nextToken?: string;
}

export async function refreshToken(
	cat: string,
	pagenum: number,
	nextToken?: string,
) {
	if (!nextToken) {
		return "ok";
	}
	await doMutation(
		gql`
      mutation MyMutation(
        $joke: String = ""
        $id: String = ""
        $nid: String = ""
      ) {
        createDdb(
          input: { joke: $joke, type: $id, cat: "pagination", nid: $nid }
        ) {
          id
        }
      }
    `,
		{
			joke: nextToken,
			id: `${cat}${pagenum + 1}`,
			nid: ulid(new Date(2222, 0, 1).getTime() - Date.now()),
		},
	);

	return "notok";
}

export async function getPaging(slug: string, page: number) {
	const check = await doQuery(
		gql`
      query MyQuery($id: String = "") {
        queryDdbsByByAppCat(type: $id, first: 1) {
          items {
            id
            joke
          }
        }
      }
    `,
		{ id: `${slug}${page}` },
	);

	return check.items?.[0]?.joke;
}

const Pagination: FC<Props> = ({ pagenum, cat, nextToken }): ReactElement => {
	const prev = pagenum - 1 === 1 ? "" : pagenum - 1;
	return (
		<div className='fixed bottom-0 left-0 z-20 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm rounded-t-xl'>
			<div className='btn-group grid grid-cols-2'>
				{pagenum !== 1 && (
					<a
						href={`${cat}${prev}`}
						className='btn-outline btn border-2 border-r-0 border-blue-700 bg-black  dark:border-black  dark:bg-white dark:text-black'
					>
						пред. страница
					</a>
				)}
				{nextToken && (
					<a
						className='btn-outline btn border-2 border-blue-700 bg-black dark:border-black dark:bg-white dark:text-black'
						href={`${cat}${pagenum + 1}`}
					>
						напред
					</a>
				)}
			</div>
		</div>
	);
};

export default Pagination;
