import { useState } from "react";

const Err = ({ err }: { err: { message: string } }): JSX.Element => {
	const [close, setClose] = useState(false);

	return !close ? (
		<div className='alert alert-error  rounded-md shadow-lg'>
			<div>
				<svg
					xmlns='http://w3.org/2000/svg'
					className='h-6 w-6 shrink-0 cursor-pointer stroke-current'
					fill='none'
					viewBox='0 0 24 24'
					onClick={() => {
						setClose(true);
					}}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
				<span>{err.message}</span>
			</div>
		</div>
	) : (
		<></>
	);
};
export default Err;
