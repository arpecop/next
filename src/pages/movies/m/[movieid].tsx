import { gql } from "@apollo/client";
import type { GetServerSideProps } from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

import type { Movie } from "@/pages/movies/";
import { doQuery } from '../../../data/client';


const Item = ({ movie }: { movie: Movie }): JSX.Element => {
	return (
		<Main
			hideFooter
			meta={<Meta title={movie.title} description={movie.description} />}
		>
			<div className='mt-6 flex flex-row flex-wrap justify-center'>
				<div className='relative flex flex-wrap overflow-hidden rounded-lg bg-indigo-700 p-1'>
					<span className='absolute top-0 left-0 z-20 rounded-md   bg-indigo-700 p-3  font-bold uppercase'>
						{movie.title}
					</span>
					<span className='absolute bottom-0 right-0 z-20 rounded-md bg-indigo-700 p-3 font-light'>
						{movie.year}
					</span>
					<img
						src={`https://klounda-s3.s3.amazonaws.com/public/filmi/${movie.id.replace('-mov', '')}.jpg`}
						alt={movie.title}
						width={342}
						height={513}
					/>
				</div>

				<div className='px-4'>
					<h2 className='my-4 text-2xl font-bold'>{movie.title}</h2>
					<p className='mb-8'>{movie.description}</p>
				</div>
			</div>
		</Main>
	);
};

export const USERS = gql`
  query MyQuery2($offset: Int!) {
    movies_aggregate {
      aggregate {
        count
      }
    }
    movies(limit: 30, offset: $offset) {
      id
      slug
      title
      year
      description
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({
	query,
}) => {

	const { movieid } = query;

	const data = await doQuery(
		gql`
			query MyQuery($id: String!) {
			 getDdb(id: $id) {
					id
					title
					description
					image
				}

			}
		`,
		{
			id: movieid as string,
		},
	);




	return {
		props: { movie: data },
	};
};
export default Item;
