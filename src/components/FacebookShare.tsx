/* eslint-disable no-underscore-dangle */
import { useRouter } from "next/router";

const FacebookShare = ({
	id,
	noWrapper,
	text,
	disabled,
}: {
	id?: string;
	noWrapper?: boolean;
	text?: string;
	disabled?: boolean;
}) => {
	const router = useRouter();
	const url = id?.includes("https") ? id : `https://kloun.lol/joke/${id}`;
	const onClick = async () => {
		await fetch(`/api/refetch/?url=${url}`);

		router.push(`https://www.facebook.com/dialog/share?
			app_id=456304742501728
			&display=popup
			&href=${encodeURIComponent(url)}
			&redirect_uri=${encodeURIComponent(url)}`);
	};

	return (
		<button
			onClick={onClick}
			className={`btn bg-blue-600 border-0 hover:bg-blue-600 text-white w-fit transition duration-300 ${noWrapper && " rounded-l-none rounded-t-none bg-transparent"
				} ${disabled && "btn-disabled blur-sm grayscale"}`}
		>
			{!noWrapper ? (
				<>
					<svg
						className='h-6 w-6 fill-white'
						role='img'
						xmlns='http://w3.org/2000/svg'
						viewBox='0 0 24 24'
					>
						<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
					</svg>
					<div className='space-x-2 pl-1 pr-2'>
						{text || "Сподели във Facebook"}
					</div>
				</>
			) : (
				<svg
					className='h-6 w-6 fill-white dark:fill-blue-600 '
					role='img'
					xmlns='http://w3.org/2000/svg'
					viewBox='0 0 24 24'
				>
					<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
				</svg>
			)}
		</button>
	);
};

export default FacebookShare;
