/* eslint-disable no-underscore-dangle */
import { useRouter } from "next/router";
import { useState } from "react";

const FacebookShare = ({
	id,
	noWrapper,
	text,
	disabled,
	onbeforeSubmit,
}: {
	id?: string;
	noWrapper?: boolean;
	text?: string;
	onbeforeSubmit?: () => Promise<string>;
	disabled?: boolean;
}) => {
	const [loading, setLoading] = useState(false);

	const [dis, setDis] = useState(false);
	const router = useRouter();
	let url = id?.includes("https") ? id : `https://kloun.lol/joke/${id}`;
	const onClick = async () => {
		setLoading(true);
		setDis(true);
		if (typeof onbeforeSubmit === "function") {
			url = await onbeforeSubmit();
		}

		await fetch(`/api/refetch/?url=${url}`);
		setLoading(false);
		setDis(true);

		router.push(`https://facebook.com/dialog/share?
			app_id=456304742501728
			&display=popup
			&href=${encodeURIComponent(url)}
			&redirect_uri=${encodeURIComponent(url)}`);
	};

	return (
		<button
			onClick={onClick}
			className={`btn bg-blue-600 border-0 hover:bg-blue-600 text-white w-fit transition duration-300 ${noWrapper && " rounded-l-none rounded-t-none bg-transparent"
				} ${dis && "btn-disabled grayscale"} ${disabled && "btn-disabled grayscale"
				}`}
		>
			{!noWrapper ? (
				<>
					{!loading ? (
						<svg
							className="h-6 w-6 fill-white"
							role="img"
							xmlns="http://w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
						</svg>
					) : (
						<svg
							className="animate-spin   h-6 w-6 fill-white"
							xmlns="http://w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx={12}
								cy={12}
								r={10}
								stroke="currentColor"
								strokeWidth={4}
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
					)}

					<div className="space-x-2 pl-1 pr-2">
						{text || "Сподели във Facebook"}
					</div>
				</>
			) : (
				<svg
					className="h-6 w-6 fill-white dark:fill-blue-600 "
					role="img"
					xmlns="http://w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
				</svg>
			)}
		</button>
	);
};

export default FacebookShare;
