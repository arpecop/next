/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';
import type { GetServerSideProps } from "next";
import Link from "next/link";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Pagination, {
  getPaging,
  refreshToken,
} from "../../components/NewPagination";
import { doQuery, gql } from "@/pages/api/graphql";

export type Movie = {
  title: string;
  slug: string;
  description: string;
  id: string;
  year: number;
};

const Index = ({
  movies,
  pagenum,
  nextToken,
}: {
  movies: Movie[];
  pagenum: number;
  nextToken?: string;
}): JSX.Element => {
  return (
    <Main
      meta={
        <Meta title={movies[0].title} description={movies[0].description} />
      }
    >
      <div className="mb-10 flex flex-wrap justify-center">
        <article className="mb-4 w-fit sm:w-fit md:w-3/4 lg:w-2/3 xl:w-2/4 2xl:w-2/5">
          <ins
            class="adsbygoogle"
            style={{ dislay: 'block', width:250 }}
            data-ad-format="fluid"
            data-ad-layout-key="-hh-7+2h-1m-4u"
            data-ad-client="ca-pub-5476404733919333"
            data-ad-slot="6719003089"
          ></ins>
        </article>
        {movies.map(({ slug, title, description, id }) => (
          <article
            key={slug}
            className="mb-4 w-fit sm:w-fit md:w-3/4 lg:w-2/3 xl:w-2/4 2xl:w-2/5"
          >
            <div className="m-2 flex h-full rounded-lg bg-base-100 dark:bg-white">
              <figure className="relative flex w-1/2  overflow-hidden rounded-l-lg">
                <div className="absolute inset-0  h-full">
                  <Link href={`/movies/${id.replace("-mov", "")}`}>
                    <img
                      src={`https://klounda-s3.s3.amazonaws.com/public/filmi/${id.replace(
                        "-mov",
                        ""
                      )}.jpg`}
                      alt={title}
                    />
                  </Link>
                </div>
              </figure>

              <div className="w-3/4 px-4">
                <h2 className="my-4 text-2xl font-bold">{title}</h2>

                <p className="mb-8">
                  {id.replace("-mov", "")}.jpg
                  {description.length > 200 ? (
                    <>{description.slice(0, 200)} ...</>
                  ) : (
                    description
                  )}
                </p>
              </div>
            </div>
            <div className="card-actions -mt-14 mr-2 justify-end">
              <Link
                href={`/movies/m/${id}`}
                passHref
                className="btn-primary btn rounded-l-none rounded-t-none dark:btn-ghost"
              >
                още
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Pagination pagenum={pagenum} cat={"/movies/p/"} nextToken={nextToken} />
    </Main>
  );
};

const MOVIES = gql`
  query QueryDdbsByByAppCat($start: String) {
    queryDdbsByByAppCat(type: "MoviesBG1", first: 15, after: $start) {
      items {
        id
        description
        image
        title
      }
      nextToken
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page }: { page?: string } = query;
  const pagenum = page ? Number(page) : 1;

  const nextTokenCurrent = await getPaging("/movies/p/", pagenum);

  const data = await doQuery(MOVIES, { start: nextTokenCurrent });
  await refreshToken("/movies/p/", pagenum, data.nextToken);

  return {
    props: {
      movies: data.items,
      pagenum,
      nextToken: data.nextToken,
    },
  };
};
export default Index;
