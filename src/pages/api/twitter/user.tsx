import {TwitterFeed} from "@/data/twittertypes";
import {ItemTweet, Tweet} from "@/pages/twitter/[id]";
import type {NextRequest} from "next/server";

export const minifyTweets = async (id: string): Promise<Tweet> => {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15",
  };

  const datafetch = await fetch(
    `https://syndication.twitter.com/srv/timeline-profile/screen-name/${id}`,
    {headers}
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
        .map((text: string, id: number) => ({id, text})),
      createdAt: new Date(t.content.tweet.created_at)
        .toISOString()
        .split("T")[0],

      originalPoster,
    };
  }) as ItemTweet[];
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

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const id = searchParams.get("id") as string;
  const resp = await minifyTweets(id);

  return new Response(JSON.stringify(resp), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}
