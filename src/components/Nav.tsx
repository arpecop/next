import Link from "next/link";
import React from "react";
import type { Cat } from "@/utils/formatter";

export interface NavProps {
	cats: Cat[];
	limit?: number;
	prefix: string;
	formatlength?: boolean;
}

const Nav = ({ cats, limit, prefix, formatlength }: NavProps) => {
	const newcats = cats.slice(0, limit || cats.length);
	const formatcount = (count: number) => {
		if (count > 1000) {
			return `${Math.floor(count / 1000)}k`;
		}
		return count;
	};
	return (
		<div className='my-3 flex w-full flex-wrap gap-3'>
			{newcats.map(
				(d: {
					cat: string;
					count: number;
					slug: string;
					altcount?: number;
					althref?: string;
				}) => (
					<Link
						className='w-full grow sm:w-1/2 md:w-1/3   lg:w-1/4 xl:w-1/5'
						key={d.cat}
						href={
							d.althref ? `/${prefix}/${d.althref}` : `/${prefix}/${d.slug}/`
						}
						passHref={true}
					>
						<div className='flex h-full items-center rounded border border-gray-800 bg-gray-800   p-4 dark:border-gray-500 dark:bg-slate-100'>
							<div className='flex-1  justify-center align-middle font-medium text-white dark:text-gray-800'>
								{formatlength ? (
									<span className='text-shadow text-xs'>{d.cat}</span>
								) : (
									<span className='text-shadow'>{d.cat}</span>
								)}
							</div>
							{d.count !== 0 && (
								<div className='btn1-count'>{formatcount(d.count)}</div>
							)}
							{d.altcount !== undefined && (
								<div className='flex-none  rounded bg-green-700 px-2 text-2xl font-extralight'>
									{d.altcount}
								</div>
							)}
						</div>
					</Link>
				),
			)}
		</div>
	);
};

export default Nav;
