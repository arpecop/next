/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

import Pagination, { getPaging, refreshToken } from "@/components/NewPagination";
import { doQuery, gql } from "@/pages/api/graphql";
import { shuffle } from "lodash";

export type User = {
	id: string;
};

export default function Index({
	twusers,
	pagenum,
	nextToken,
}: {
	twusers: User[];
	pagenum: number;
	nextToken?: string;
}) {
	return (
		<Main
			hideFooter
			meta={
				<Meta
					title={shuffle(twusers)
						.slice(0, 5)
						.map((item: User) => item.id)
						.join(" ")}
					description="Twitter DB"
				/>
			}
		>
			<div className="flex ">
				{"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
					<button
						key={letter}
						className="active flex gap-4 bg-slate-900 p-2 font-bold text-white dark:bg-white dark:text-slate-900"
					>
						{letter}
					</button>
				))}
			</div>
			<ul className="menu menu-compact flex-row flex-wrap justify-center p-0">
				{twusers.map((user) => (
					<li key={user.id} className="m-1">
						<a
							href={`/tw/u/${user.id.replace("_tw", "").toLowerCase()}`}
							className="active flex gap-4 bg-slate-900 font-bold text-white dark:bg-white dark:text-slate-900"
						>
							{user.id.replace("_tw", "")}
						</a>
					</li>
				))}
			</ul>
			<Pagination pagenum={pagenum} cat="/tw/" nextToken={nextToken} />
		</Main>
	);
}

export const getServerSideProps = async ({
	query,
}: {
	query: { page: string; jokecat: string };
}) => {
	const pagenum = Number(query.page) || 1;
	const nextTokenCurrent = await getPaging(query.jokecat, pagenum);

	const data = await doQuery(
		gql`
      query MyQuery($nextToken: String = "") {
        queryDdbsByByLetter(type: "Twuser", first: 150, after: $nextToken) {
          nextToken
          items {
            id
          }
        }
      }
    `,
		{
			nextToken: nextTokenCurrent,
		}
	);

	await refreshToken(query.jokecat, pagenum, data.nextToken);

	return {
		props: {
			twusers: data.items,
			nextToken: data.nextToken,
			pagenum,
		},
	};
};
