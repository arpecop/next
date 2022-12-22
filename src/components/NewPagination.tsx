import Link from "next/link";
import type { FC, ReactElement } from "react";
import { ulid } from "ulidx";

import { doMutation, doQuery, gql } from "../data/client";
const prefix = "11x";

interface Props {
	pagenum: number;
	cat: string;
	nextToken?: string;
}

export async function refreshToken(
	cat: string,
	pagenum: number,
	nextToken?: string
) {
	if (!nextToken) {
		return "ok";
	}
	doMutation(
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
			id: `${prefix}${cat}${pagenum + 1}`,
			nid: ulid(new Date(2222, 0, 1).getTime() - Date.now()),
		}
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
		{ id: `${prefix}${slug}${page}` }
	);

	return check.items?.[0]?.joke;
}

const Pagination: FC<Props> = ({ pagenum, cat, nextToken }): ReactElement => {
	const prev = pagenum - 1 === 1 ? "" : pagenum - 1;
	const lengths = [
		"",
		"text-lg pt-2 ",
		"text-md pt-2 ",
		"pt-2  text-xs",
		"pt-2  text-xs rotate-90",
	];
	const className =
		"btn-outline btn   bg-black  dark:border-black  dark:bg-white dark:text-black";
	return (
		<div className='fixed bottom-0 left-0 z-20 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm rounded-t-xl'>
			<div className='btn-group'>
				{pagenum !== 1 && (
					<Link passHref href={`${cat}${prev}`} className={className}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-8 h-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z'
							/>
						</svg>
					</Link>
				)}
				<button className={className}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-10 h-10 absolute'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
						/>
					</svg>
					<div className={lengths[pagenum.toString().length]}> {pagenum}</div>
				</button>
				{nextToken && (
					<Link passHref className={className} href={`${cat}${pagenum + 1}`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-8 h-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z'
							/>
						</svg>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Pagination;
