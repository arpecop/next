function Header({ title }: { title?: string }) {
	return (
		<header>
			<div className='absolute w-full z-10 top-0'>
				<svg
					viewBox='0 0 1440 320'
					xmlns='http://w3.org/2000/svg'
					className='w-full block dark:hidden z-0'
				>
					<path
						d='M0 128h48c48 0 144 0 240-16s192-48 288-42.7c96 5.7 192 47.7 288 48 96-.3 192-42.3 288-42.6 96 .3 192 42.3 240 64l48 21.3V0H0z'
						fill='#2d3748'
					/>
				</svg>
				<svg
					viewBox='0 0 1440 320'
					xmlns='http://w3.org/2000/svg'
					className='w-full dark:block hidden z-0'
				>
					<path
						d='M0 128h48c48 0 144 0 240-16s192-48 288-42.7c96 5.7 192 47.7 288 48 96-.3 192-42.3 288-42.6 96 .3 192 42.3 240 64l48 21.3V0H0z'
						fill='#09f'
					/>
				</svg>
			</div>
			<div className='z-20 flex w-full  items-center justify-center sm:justify-start md:justify-center relative'>
				<div className='w-24 sm:w-24 md:w-fit relative'>
					<img
						src='/images/logodark.png'
						alt=''
						className='z-20  dark:sepia '
						placeholder='empty'
					/>
					<img
						src='/images/logodark.png'
						alt=''
						className='z-20 absolute dark:grayscale absolute blur-lg duration-500 dark:blur-none top-0'
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
			<div className='flex absolute z-40 top-0  w-full p-2'>
				<div className='w-auto'>
					<div className='dropdown visible xs:visible sm:invisible'>
						<label tabIndex={0} className='btn-ghost btn-circle btn'>
							<svg
								xmlns='http://w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h7'
								/>
							</svg>
						</label>
						<div className='bg-blue-300 w-full'>Menu</div>
					</div>
				</div>
				Menu
			</div>
		</header>
	);
}

export default Header;
//test
