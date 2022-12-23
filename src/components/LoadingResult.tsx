export const ResultWrapper = ({ children }: { children: any }) => (
	<div className='container overflow-hidden  rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 h-fit'>
		<div className='flex justify-center items-center  m-1 rounded-lg relative overflow-hidden   bg-black/80'>
			{children}
		</div>
	</div>
);

const LoadingResult = ({ name }: { name?: string }) => (
	<ResultWrapper>
		<div className='absolute'>
			<p className='text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-teal-100'>
				{name}
			</p>
		</div>
		<div className='flex h-full w-full absolute justify-center items-center'>
			<svg
				className='animate-spin   h-12 w-12 text-white'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
			>
				<circle
					className='opacity-25'
					cx={12}
					cy={12}
					r={10}
					stroke='currentColor'
					strokeWidth={4}
				/>
				<path
					className='opacity-75'
					fill='currentColor'
					d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
				/>
			</svg>
			<span className='animate-ping  absolute inline-flex h-full w-full rounded-full   opacity-75 bg-black  ' />
		</div>

		<svg
			className='w-full h-full  '
			width='1200'
			height='630'
			viewBox='0 0 1200 630'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		/>
	</ResultWrapper>
);

export default LoadingResult;
