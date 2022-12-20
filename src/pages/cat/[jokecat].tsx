
import Link from "next/link";

import { JokeThumbnail } from "@/components/JokeThumbnail";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Pagination, {
	getPaging,
	refreshToken
} from "@/components/NewPagination";
// import { getPaging } from '@/components/NewPagination';
import { doQuery, gql } from "@/data/client";
import type { Doc } from "@/data/structure";
import { deslugify } from "@/utils/formatter";

const CatPage = ({
	jokes,
	pagenum,
	cat,
	slug,
	nextToken,
}: {
	jokes: Doc[];
	pagenum: number;
	cat: string;
	slug: string;
	nextToken?: string;
}): JSX.Element => {
	return (
		<Main
			meta={
				<Meta
					title={`Вицове от ${cat} на страница ${pagenum}`}
					description={`Вицове от ${cat}  `}
				/>
			}
		>
			<div className='breadcrumbs text-sm'>
				<ul>
					<li>
						<Link href={"/?type=Jokes"}>Вицове</Link>
					</li>
					<li>
						<Link href={`/cat/${cat}`}>{cat}</Link>
					</li>
					<li>
						<Link href={`/cat/${cat}/${pagenum}`}>{pagenum}</Link>
					</li>
				</ul>
			</div>
			<div className='fixed bottom-0 left-0 z-10 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm'>
				<Pagination
					pagenum={pagenum}
					cat={`/cat/${slug}/`}
					nextToken={nextToken}
				/>
			</div>
			<div className='flex flex-wrap'>
				{jokes.map((item) => (
					<JokeThumbnail
						item={item}
						key={item.id}
						showcats={false}
						short={true}
					/>
				))}
			</div>
		</Main>
	);
};

export default CatPage;

export const LIST_JOKES = /* GraphQL */ gql`
  query MyQuery($cat: String!, $nextToken: String) {
    queryDdbsByByCat(cat: $cat, first: 30, after: $nextToken) {
      items {
        id
        joke: title
        cat
      }
      nextToken
    }
  }
`;

export const getServerSideProps = async ({
	query,
}: {
	query: { page: string; jokecat: string };
}) => {
	const pagenum = Number(query.page) || 1;
	const nextTokenCurrent = await getPaging(query.jokecat, pagenum);

	const data = await doQuery(LIST_JOKES, {
		cat: `JOK${deslugify(query.jokecat)}`,

		nextToken: nextTokenCurrent,
	});
	await refreshToken(query.jokecat, pagenum, data.nextToken);

	return {
		props: {
			jokes: data.items,
			pagenum,
			cat: deslugify(query.jokecat),
			slug: query.jokecat,
			nextToken: data.nextToken,
		},
	};
};
