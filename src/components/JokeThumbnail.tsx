import dynamic from "next/dynamic";
import type { FC, MouseEvent, ReactElement } from "react";

import { FormatJoke } from "@/components/JokeText";

import type { Doc } from "../data/structure";

const FacebookShare = dynamic(() => import("@/components/FacebookShare"), {
	ssr: false,
});

interface Props {
	item: Doc;
	id?: string;
	showcats?: boolean;
	short: boolean;
	hideReadMore?: boolean;
	onClick?: (event: MouseEvent) => void;
}

export const JokeThumbnail: FC<Props> = ({
	item,
	showcats,
	short,
	hideReadMore,
}): ReactElement => {
	const { joke, cat } = item;
	const jlen = joke.length <= 150;

	return (
		<article className='joke relative'>
			{showcats && item.cat !== "Разни" && (
				<a
					className='joketop text-shadow'
					href={`/cat/${cat.replace(/ /g, "%20")}/`}
				>
					<h2>{cat.replace("JOK", "")}</h2>
				</a>
			)}
			<div className='jokewrap'>
				<div className='py-5'>
					<FormatJoke joke={joke} short={short} />
				</div>
			</div>
			{!hideReadMore &&
				(!jlen ? (
					<label
						htmlFor={item.id}
						className='absolute right-2 -mt-12 flex h-12 w-12 cursor-pointer  items-center justify-center rounded-br-lg border  border-gray-800 bg-black shadow-lg dark:border-gray-500 dark:bg-white'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='h-6 w-6 dark:text-black'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
							/>
						</svg>
					</label>
				) : (
					<div className=' absolute right-5 -mt-8'>
						<FacebookShare
							id={`https://kloun.lol/joke/${item.id}`}
							noText
							noWrapper
						/>
					</div>
				))}
			<input type='checkbox' id={item.id} className='modal-toggle' />
			<div className='modal '>
				<div className='modal-box dark:bg-white'>


					<FormatJoke joke={joke} />

					<div className='modal-action btn-group'>
						<a href={`https://kloun.lol/joke/${item.id}`} className='btn'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='mr-2 h-6 w-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13'
								/>
							</svg>
							Url
						</a>
						<label htmlFor={item.id} className='btn'>
							ХаХа!{" "}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='ml-2 h-6 w-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</label>
					</div>
				</div>
			</div>
		</article>
	);
};
