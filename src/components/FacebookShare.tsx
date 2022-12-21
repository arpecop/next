/* eslint-disable no-underscore-dangle */

const FacebookShare = ({
	id,
	noWrapper,
}: {
	id?: string;
	noWrapper?: boolean;
}) => {
	// url={`https://kloun.lol/joke/${id}`}
	// quote={'next-share is a social share buttons for your next React apps.'}
	// hashtag={'#виц'}
	/// <FacebookShareButton url={`https://kloun.lol/joke/${id}`}>
	const url = id?.includes("https") ? id : `https://kloun.lol/joke/${id}`;
	async function wait() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

	const onClick = async () => {
		await fetch(`https://kloun.lol/api/refetch/?url=` + url);
		//await refetch.json();
		window.open(
			`https://www.facebook.com/dialog/share?
			app_id=456304742501728
			&display=popup
			&href=${encodeURIComponent(url)}
			&redirect_uri=${encodeURIComponent(url)}`,
			"_blank"
		);
	};

	return (
		<div className='flex items-center justify-center cursor-pointer'>
			<div className={`font-bold text-white`}>
				<a onClick={onClick} target='_blank' rel='nofollow'>
					{!noWrapper ? (
						<div className='flex justify-center items-center bg-blue-600 	rounded rounded-md'>
							<svg
								className='h-6 w-6 fill-current ml-2'
								role='img'
								xmlns='http://w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
							</svg>
							<div className='py-2 space-x-2 pl-1 pr-2'>
								Сподели във Facebook
							</div>
						</div>
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
				</a>
			</div>
		</div>
	);
};

export default FacebookShare;
