import Image from "next/image";
import React from "react";
function Logo({ title }: { title?: string }) {
	return (
		<header className="bg-[url('/images/upwave.svg')] bg-cover dark:bg-[url('/images/upwave-white.svg')]">
			<div className='z-10 flex w-full items-center justify-center pt-2 sm:pt-6'>
				<div className='block dark:hidden'>
					<Image
						src='/images/logodark.png'
						alt='kloun logo'
						width={140}
						height={181}
						placeholder='empty'
					/>
				</div>
				<div className='hidden dark:block'>
					<Image
						src='/images/logowhite.png'
						alt='kloun logo'
						width={140}
						height={181}
						placeholder='empty'
					/>
				</div>
				{title && (
					<div className='flex items-center justify-center overflow-hidden truncate text-3xl font-extrabold md:text-6xl'>
						<h1 className='text-purple-200 dark:text-indigo-900'>
							<span className='font-medium'>/{title}</span>
						</h1>
					</div>
				)}
			</div>
		</header>
	);
}

export default Logo;
