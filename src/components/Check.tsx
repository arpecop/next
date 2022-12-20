import React from "react";

function Logo() {
	return (
		<svg
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='3'
			className='mr-4 h-6 w-6 shrink-0 text-indigo-400'
			viewBox='0 0 24 24'
		>
			<path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
			<path d='M22 4L12 14.01l-3-3' />
		</svg>
	);
}

export default Logo;
