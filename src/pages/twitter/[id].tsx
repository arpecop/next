/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import { TwitterFeed } from "../../data/twittertypes";

type Tweet = {
	id: string;
	text: string;
	createdAt: string;
	screenName: string;
	name: string;
	profileImageUrl: string;
	originalPoster: {
		screenName: string;
		name: string;
		profileImageUrl: string;
	} | null;
};

const minifyTweets = (obj: TwitterFeed) => {
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
			text: t.content.tweet.retweeted_status
				? t.content.tweet.retweeted_status.full_text
				: t.content.tweet.text,
			createdAt: new Date(t.content.tweet.created_at)
				.toISOString()
				.split("T")[0],
			screenName: t.content.tweet.user.screen_name,
			name: t.content.tweet.user.name,
			profileImageUrl: t.content.tweet.user.profile_image_url_https,
			originalPoster,
		};
	});
	return tweets;
};

const TwuserPage = ({
	props,
	tweets,
}: {
	props: TwitterFeed;
	tweets: Tweet[];
}): JSX.Element => {
	return (
		<Main
			hideFooter
			meta={
				<Meta
					title={
						props.props.pageProps.timeline.entries[0].content.tweet.user
							.description
					}
					description={
						props.props.pageProps.timeline.entries[0].content.tweet.user
							.description
					}
				/>
			}
		>
			{tweets.map((t) => (
				<div key={t.id}>
					<div className="flex flex-shrink-0 p-4 pb-0">
						<a className="flex-shrink-0 group block">
							<div className="flex items-center">
								<div>
									<img
										className="inline-block h-10 w-10 rounded-full"
										src={t.profileImageUrl}
										alt=""
									/>
								</div>
								<div className="ml-2">
									<p className="text-base leading-6 font-bold">
										{t.name}
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
								<img
									className="inline-block h-5 w-5 rounded-full ml-14"
									src={t.originalPoster.profileImageUrl}
									alt=""
								/>
								<div className="text-base leading-6 font-bold pl-2">
									{t.originalPoster.screenName} :
								</div>
							</a>
						) : (
							<div className="h-1" />
						)}

						{t.text.split("\n").map((p, i) => (
							<div key={i} className="pl-14 w-full">
								{p}
							</div>
						))}
					</div>
				</div>
			))}
		</Main>
	);
};

export const getServerSideProps = async ({ query }: { query: { id: string } }) => {
	const { id } = query;

	const headers = {
		"User-Agent":
			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15",
	};

	const datafetch = await fetch(
		`https://syndication.twitter.com/srv/timeline-profile/screen-name/${id}`,
		{ headers }
	);
	const html = await datafetch.text();
	const props = JSON.parse(
		html
			.replace(' id="__NEXT_DATA__" type="application/json"', "")
			.split("<script>")[1]
			.split("</script>")[0]
	) as TwitterFeed;
	console.log(minifyTweets(props));

	return {
		props: {
			props,
			tweets: minifyTweets(props),
		},
	};
};

export const runtime = "experimental-edge";

export default TwuserPage;
