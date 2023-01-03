import JokeThumbnail from "@/components/JokeThumbnail";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Pagination, { getPaging, refreshToken } from "@/components/NewPagination";
// import { getPaging } from '@/components/NewPagination';
import { doQuery } from "@/pages/api/graphql";

import { deslugify, jokecats } from "@/utils/formatter";
import { Doc } from "@/data/structure";
export default function CatPage({
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
}) {
	return (
		<Main
			meta={
				<Meta
					title={`Вицове от ${cat} на страница ${pagenum}`}
					description={`Вицове от ${cat}  `}
				/>
			}
		>
			<div className="breadcrumbs text-sm">
				<ul>
					<li>
						<a href={"/?type=Jokes"}>Вицове</a>
					</li>
					<li>
						<a href={`/cat/${cat}`}>{cat}</a>
					</li>
					<li>
						<a href={`/cat/${cat}/${pagenum}`}>{pagenum}</a>
					</li>
				</ul>
			</div>

			<Pagination
				pagenum={pagenum}
				cat={`/cat/${slug}/`}
				nextToken={nextToken}
			/>

			<div className="flex flex-wrap">
				<div className="joke">
					<div className="rounded-md jokewrap p-0">
						<ins
							className="adsbygoogle"
							style={{ display: "block", textAlign: "center" }}
							data-ad-layout="in-article"
							data-ad-format="fluid"
							data-ad-client="ca-pub-5476404733919333"
							data-ad-slot="1374619867"
						/>
					</div>
				</div>
				{jokes.map((item) => (
					<JokeThumbnail
						item={item}
						key={item.id}
						showcats={false}
						short={true}
					/>
				))}
				<div className="joke">
					<div className="rounded-md jokewrap p-0">
						<ins
							className="adsbygoogle"
							style={{ display: "block", textAlign: "center" }}
							data-ad-layout="in-article"
							data-ad-format="fluid"
							data-ad-client="ca-pub-5476404733919333"
							data-ad-slot="1374619867"
						/>
					</div>
				</div>
			</div>
		</Main>
	);
}

export const getServerSideProps = async ({
	query,
}: {
	query: { page: string; jokecat: string };
}) => {
	const LIST_JOKES = `
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
	const pagenum = Number(query.page) || 1;
	const nextTokenCurrent = await getPaging(query.jokecat, pagenum);

	const data = await doQuery(LIST_JOKES, {
		cat: `JOK${deslugify(jokecats, query.jokecat)}`,

		nextToken: nextTokenCurrent,
	});

	await refreshToken(query.jokecat, pagenum, data.nextToken);

	return {
		props: {
			jokes: data.items,
			pagenum,
			cat: deslugify(jokecats, query.jokecat),
			slug: query.jokecat,
			nextToken: data.nextToken,
		},
	};
};

export const runtime = "experimental-edge";
