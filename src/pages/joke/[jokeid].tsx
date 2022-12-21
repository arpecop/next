/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';
import { chunk, shuffle } from "lodash";
import type { GetServerSideProps } from "next";

import { FormatJoke } from "@/components/JokeText";
import { JokeThumbnail } from "@/components/JokeThumbnail";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";
import type { Doc } from "@/data/structure";
import type { Cat } from "@/utils/formatter";
import { catsdata } from "@/utils/formatter";

import { doMQuery, gql } from "../../data/client";

import FacebookShare from "@/components/FacebookShare";

const SingleJoke = (props: {
	joke: Doc;
	items?: [Doc[], Doc[], Doc[]];
	cats: [Cat[], Cat[]];
}): JSX.Element => {
	return (
		<Main
			hideFooter
			meta={
				<Meta
					title={props.joke?.joke || ""}
					description={props.joke?.joke || ""}
					cat={props.joke?.cat || ""}
					image={`https://kloun.lol/api/joke/og/?idx=${props.joke?.id}`}
				/>
			}
		>
			<h1 className='text-purple-200 dark:text-indigo-900'>
				<span className='font-medium'>/ Бисери</span>
			</h1>
			<div className='my-10 flex w-full flex-col text-center'>
				<article className='mx-auto mb-6 px-10 text-xl leading-relaxed xs:px-2 sm:px-4 lg:w-2/3'>
					<FormatJoke joke={props.joke?.joke} />
				</article>
				<div className=' flex justify-end items-center'>
					<FacebookShare id={`https://kloun.lol/joke/${props.joke?.id}`} />
				</div>
			</div>

			{props.items?.[0] && (
				<>
					<div className='-m-2 flex flex-wrap'>
						<article className='joke'>
							<ins
								className='adsbygoogle jokewrap'
								style={{ display: "block", textAlign: "center" }}
								data-ad-layout='in-article'
								data-ad-format='fluid'
								data-ad-client='ca-pub-5476404733919333'
								data-ad-slot='1374619867'
							/>
						</article>
						{props.items?.[0].map((item): JSX.Element => {
							return (
								<JokeThumbnail
									item={item}
									key={item.id}
									showcats={true}
									short={true}
								/>
							);
						})}
					</div>
					<ins
						className='adsbygoogle'
						style={{ display: "block", textAlign: "center" }}
						data-ad-layout='in-article'
						data-ad-format='fluid'
						data-ad-client='ca-pub-5476404733919333'
						data-ad-slot='1374619867'
					></ins>
					<Nav cats={props.cats[1]} prefix='cat' />
					<div className='-m-2 flex flex-wrap'>
						<article className='joke'>
							<ins
								className='adsbygoogle jokewrap'
								style={{ display: "block", textAlign: "center" }}
								data-ad-layout='in-article'
								data-ad-format='fluid'
								data-ad-client='ca-pub-5476404733919333'
								data-ad-slot='1374619867'
							/>
						</article>
						{props.items?.[1].map((item): JSX.Element => {
							return (
								<JokeThumbnail
									item={item}
									key={item.id}
									showcats={true}
									short={true}
								/>
							);
						})}
					</div>
					<Nav cats={props.cats[0]} prefix='cat' />
					<div className='-m-2 flex flex-wrap'>
						<article className='joke'>
							<ins
								className='adsbygoogle jokewrap'
								style={{ display: "block", textAlign: "center" }}
								data-ad-layout='in-article'
								data-ad-format='fluid'
								data-ad-client='ca-pub-5476404733919333'
								data-ad-slot='1374619867'
							/>
						</article>
						{props.items?.[2].map((item): JSX.Element => {
							return (
								<JokeThumbnail
									item={item}
									key={item.id}
									showcats={true}
									short={true}
								/>
							);
						})}
					</div>
				</>
			)}
		</Main>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { jokeid } = query;
	const cats = chunk(shuffle(catsdata), 7);

	const data = await doMQuery(
		gql`
      query MyQuery($id: String!) {
        single: getDdb(id: $id) {
          id
          joke: title
          cat
          nid
          type
        }
        multi: listDdbs(
          filter: { id: { gt: $id }, cat: { eq: "JOKРазни" } }
          limit: 1230
        ) {
          nextToken
          items {
            nid
            joke: title
            cat
            id
            type
          }
        }
      }
    `,
		{
			id: jokeid as string,
		}
	);

	const jokes = data.multi.items;
	return {
		props: {
			joke: data.single,
			// items: [data],
			items: chunk(jokes, Math.round(jokes.length / 3)),
			cats,
		},
	};
};

export default SingleJoke;
