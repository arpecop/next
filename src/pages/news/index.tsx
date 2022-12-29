import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Pagination, { getPaging, refreshToken } from "@/components/NewPagination";
import NewsThumbnail from "@/components/NewsThumbnail";
import { doQuery, gql } from "@/pages/api/graphql";

export type News = {
	title: string;
	image: string;
	nid: string;
	uid: string;
	description?: string;
	parsed?: { html: string[]; description?: string };
	content: string;
};

export type RootNewsProps = {
	newsbg: News[];
	pagenum: number;
	newsbg_by_pk?: News;
	nextToken?: string;
};

const Index = ({ newsbg, pagenum, nextToken }: RootNewsProps): JSX.Element => {
	return (
		<Main
			meta={
				<Meta
					title={"Новини"}
					description="Новини"
					cat="Новини"
					url="https://kloun.lol/news/"
				/>
			}
		>
			<div className="my-10 flex w-full flex-col">
				<div className="flex flex-wrap">
					<div className="w-full joke">
						<ins
							className="adsbygoogle rounded-md jokewrap p-0"
							style={{ display: "block", textAlign: "center" }}
							data-ad-layout="in-article"
							data-ad-format="fluid"
							data-ad-client="ca-pub-5476404733919333"
							data-ad-slot="1374619867"
						/>
					</div>
					{newsbg.map(({ uid, title, image }) => (
						<NewsThumbnail uid={uid} title={title} image={image} key={uid} />
					))}
					<div className="w-full joke">
						<ins
							className="adsbygoogle rounded-md jokewrap p-0"
							style={{ display: "block", textAlign: "center" }}
							data-ad-layout="in-article"
							data-ad-format="fluid"
							data-ad-client="ca-pub-5476404733919333"
							data-ad-slot="1374619867"
						/>
					</div>

					<Pagination pagenum={pagenum} cat="/news/" nextToken={nextToken} />
				</div>
			</div>
		</Main>
	);
};

export const getServerSideProps = async (context: { query: { page?: string } }) => {
	const pagenum = context.query.page ? Number(context.query.page) : 1;
	const nextTokenCurrent = await getPaging("newsbg", pagenum);

	const data = await doQuery(
		gql`
      query MyQuery($cat: String = "NewsBG", $nextToken: String) {
        queryDdbsByByCat(cat: $cat, first: 30, after: $nextToken) {
          items {
            uid: id
            title
            image
          }
          nextToken
        }
      }
    `,
		{
			nextToken: nextTokenCurrent,
		}
	);
	await refreshToken("newsbg", pagenum, data.nextToken);

	return {
		props: {
			newsbg: data.items,
			nextToken: data.nextToken,
			pagenum,
		},
	};
};

export default Index;
export const runtime = "experimental-edge";
