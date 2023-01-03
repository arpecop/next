import { useEffect, useState } from "react";

export interface Item {
	id: number;
	promoted: number;
	userId: number;
	up: number;
	down: number;
	created: number;
	image: string;
	thumb: string;
	fullsize: string;
	width: number;
	height: number;
	audio: boolean;
	source: string;
	flags: number;
	user: string;
	mark: number;
	gift: number;
}

export interface RootObject {
	atEnd: boolean;
	atStart: boolean;

	items: Item[];
	ts: number;
	cache: string;
	rt: number;
	qc: number;
}

const Program = ({ limit, className }: { limit?: number; className: string }) => {
	const [items, setItems] = useState<Item[]>([]);
	const [img, setImg] = useState<string | null>(null);
	async function fetchMyAPI(older?: number) {
		const res2 = await fetch(
			`https://api.codetabs.com/v1/proxy?quest=https://pr0gramm.com/api/items/get?flags=1&promoted=1${older ? `&older=${older}` : ""
			}`
		);
		const response = await res2.json();

		if (older) {
			setItems((itemz) => itemz.concat(response.items));
			// setItem(response.data.items[response.data.items.length - 1].promoted);
		} else {
			setItems(response.items);
			//  setItem(response.data.items[response.data.items.length - 1].promoted);
		}
	}

	useEffect(() => {
		// initial fetch
		fetchMyAPI();
	}, []);

	if (!items) {
		return <div>Loading...</div>;
	}

	return (
		<div className={className}>
			{items
				.slice(0, limit || items.length)
				.map(
					({
						thumb,
						id,
					}: {
						thumb: string;
						fullsize?: string;
						image?: string;
						id: number;
						promoted: number;
					}) => (
						<label
							key={id}
							className="hover:animate-pulse"
							htmlFor="my-modal"
							onClick={() => setImg(`https://img.pr0gramm.com/${thumb}`)}
						>
							<div className="rounded-lg bg-gradient-to-r from-purple-900 to-pink-600 p-1 dark:from-white dark:to-slate-400 relative m-1 cursor-pointer">
								<picture>
									<img
										className="cursor-pointer"
										src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
										width={128}
										height={128}
									/>
									<img
										className="rounded-lg   absolute top-1"
										alt="pr0gramm"
										loading="lazy"
										width={128}
										height={128}
										src={`https://thumb.pr0gramm.com/${thumb}`}
									/>
								</picture>
							</div>
						</label>
					)
				)}

			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<label htmlFor="my-modal" className="modal cursor-pointer">
				<label className="modal-box relative" htmlFor="">
					<p className="py-4">
						<picture>
							<img src={img || ""} alt="" />
						</picture>
					</p>
				</label>
			</label>
		</div>
	);
};
export { Program };
