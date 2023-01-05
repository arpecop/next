/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

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

export default function TwuserPage({ tweets }: { tweets: Tweet }) {
	return (
		<Main
			hideFooter
			meta={
				<Meta title="{tweets.description}" description="{tweets.description}" />
			}
		>
			dasdas
		</Main>
	);
}

export const getServerSideProps = async ({ query }: { query: { id: string } }) => {
	const { dynamoid } = query;
	//const tweets = await minifyTweets(id);

	return {
		props: {},
	};
};

export const runtime = "experimental-edge";
