/* eslint-disable no-underscore-dangle */

const FacebookShare = ({
	id,
	noText,
	noWrapper,
}: {
	id?: string;
	noText?: boolean;
	noWrapper?: boolean;
}) => {
	// url={`https://kloun.lol/joke/${id}`}
	// quote={'next-share is a social share buttons for your next React apps.'}
	// hashtag={'#виц'}
	/// <FacebookShareButton url={`https://kloun.lol/joke/${id}`}>
	const encodedShareUrl = id?.includes('https') ? id : `https://kloun.lol/joke/${id}`

	return (

		<a
			className={
				!noWrapper
					? "inline-flex items-center space-x-2 rounded bg-blue-500 px-4 py-2 font-semibold text-white"
					: ""
			}
			href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(encodedShareUrl)}`}
			target="_blank"
			rel='nofollow'
		>
			<svg
				className='h-5 w-5 fill-current'
				role='img'
				xmlns='http://w3.org/2000/svg'
				viewBox='0 0 24 24'
			>
				<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
			</svg>

			<span>{noText ? "" : "Сподели във Facebook"}</span>
		</a>

	);
};

export default FacebookShare;
