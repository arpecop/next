/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import { TwitterFeed } from "../../data/twittertypes";

type Item = {
	id: string;
	text: { id: number; text: string }[];
	screenName: string;
	name: string;
	profileImageUrl: string;
	createdAt: string;
	originalPoster: {
		screenName: string;
		name: string;
		profileImageUrl: string;
	} | null;
};

type Tweet = {
	screenName: string;
	name: string;
	description: string;
	profileImageUrl: string;
	tweets: Item[];
};

export const minifyTweets = async (id: string): Promise<Tweet> => {
	const headers = {
		"User-Agent":
			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15",
	};

	const datafetch = await fetch(
		`https://syndication.twitter.com/srv/timeline-profile/screen-name/${id}`,
		{ headers }
	);
	const html = await datafetch.text();
	const obj = JSON.parse(
		html
			.replace(' id="__NEXT_DATA__" type="application/json"', "")
			.split("<script>")[1]
			.split("</script>")[0]
	) as TwitterFeed;

	const tweets = obj.props.pageProps.timeline.entries.map((t) => {
		const originalPoster = t.content.tweet.retweeted_status
			? {
				screenName: t.content.tweet.retweeted_status.user.screen_name,
				name: t.content.tweet.retweeted_status.user.name,
				profileImageUrl:
					t.content.tweet.retweeted_status.user.profile_image_url_https,
			}
			: null;
		return {
			id: t.entry_id,
			text: (t.content.tweet.retweeted_status
				? t.content.tweet.retweeted_status.full_text
				: t.content.tweet.full_text
			)
				.split("\n")
				.map((text: string, id: number) => ({ id, text })),
			createdAt: new Date(t.content.tweet.created_at)
				.toISOString()
				.split("T")[0],

			originalPoster,
		};
	}) as Item[];
	return Promise.resolve({
		description:
			obj.props.pageProps.timeline.entries[0].content.tweet.user.description,
		screenName:
			obj.props.pageProps.timeline.entries[0].content.tweet.user.screen_name,
		name: obj.props.pageProps.timeline.entries[0].content.tweet.user.name,
		profileImageUrl:
			obj.props.pageProps.timeline.entries[0].content.tweet.user
				.profile_image_url_https,
		tweets,
	});
};
export default function TwuserPage({ tweets }: { tweets: Tweet }) {
	return (
		<Main
			hideFooter
			meta={
				<Meta title={tweets.description} description={tweets.description} />
			}
		>
			{tweets.tweets.map((t) => (
				<div key={t.id}>
					<div className="flex flex-shrink-0 p-4 pb-0">
						<a className="flex-shrink-0 group block">
							<div className="flex items-center">
								<picture>
									<img
										className="inline-block h-10 w-10 rounded-full"
										src={tweets.profileImageUrl}
										alt=""
									/>
								</picture>
								<div className="ml-2">
									<p className="text-base leading-6 font-bold">
										{tweets.name}
										<span className="text-sm leading-5 font-medium  pl-2">
											{t.createdAt}
										</span>
										{t.originalPoster ? " retweeted:" : ""}
									</p>
								</div>
							</div>
						</a>
					</div>
					<div>
						{t.originalPoster ? (
							<a
								className="flex  items-center"
								href={"/tw/u/" + t.originalPoster.screenName}
							>
								<picture>
									<img
										className="inline-block h-5 w-5 rounded-full ml-14"
										src={t.originalPoster.profileImageUrl}
										alt=""
									/>
								</picture>
								<div className="text-base leading-6 font-bold pl-2">
									{t.originalPoster.screenName} :
								</div>
							</a>
						) : (
							<div className="h-1" />
						)}

						{t.text.map((p) => (
							<div key={p.id} className="pl-14 w-full">
								{p.text}
							</div>
						))}
					</div>
				</div>
			))}
		</Main>
	);
}

export const getServerSideProps = async ({ query }: { query: { id: string } }) => {
	const { id } = query;
	const tweets = await minifyTweets(id);

	return {
		props: {
			tweets,
		},
	};
};

export const runtime = "experimental-edge";
