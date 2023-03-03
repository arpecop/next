/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import type { GetServerSideProps } from "next";

import { FormatJoke } from "@/components/JokeText";
import JokeThumbnail from "@/components/JokeThumbnail";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";

import type { Cat } from "@/utils/formatter";
import { catsdata } from "@/utils/formatter";

import FacebookShare from "@/components/FacebookShare";
import { chunk, shuffle } from "lodash";
import { Doc } from "../../data/structure";

import db from "@/data/client";

const SingleJoke = (props: {
  joke: Doc;
  items: [Doc[], Doc[], Doc[]];
  cats: [Cat[], Cat[], Cat[]];
}): JSX.Element => {
  // яжте ми хуя сИга!
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={props.joke?.joke || ""}
          description={props.joke?.joke || ""}
          image={`https://kloun.lol/api/joke/og/?idx=${props.joke?.id}`}
          removeProfanity
        />
      }
    >
      <div className="my-10 flex w-full flex-col text-center">
        <article className="mx-auto mb-6 px-10 text-xl leading-relaxed xs:px-2 sm:px-4 lg:w-2/3">
          <FormatJoke joke={props.joke?.joke} />
        </article>
        <div className=" flex justify-end items-center">
          <FacebookShare id={`https://kloun.lol/joke/${props.joke?.id}`} />
        </div>
      </div>

      <div className="-m-2 flex flex-wrap">
        <article className="joke">
          <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-5476404733919333"
            data-ad-slot="5139686620"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </article>
        {props.items[0].map((item): JSX.Element => {
          return (
            <JokeThumbnail
              item={item}
              key={item.id}
              showcats={true}
              short={true}
            />
          );
        })}
      </div>
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-5476404733919333"
        data-ad-slot="5139686620"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <Nav cats={props.cats[1]} prefix="cat" />
      <div className="-m-2 flex flex-wrap">
        <article className="joke">
          <div className="jokewrap">
            <ins
              className="adsbygoogle w-full"
              style={{ dislay: 'block', minWidth: 250 }}
              data-ad-format="fluid"
              data-ad-layout-key="-hh-7+2h-1m-4u"
              data-ad-client="ca-pub-5476404733919333"
              data-ad-slot="6719003089"
            />
          </div>
        </article>
        {props.items[1].map((item): JSX.Element => {
          return (
            <JokeThumbnail
              item={item}
              key={item.id}
              showcats={true}
              short={true}
            />
          );
        })}
      </div>
      <Nav cats={props.cats[2]} prefix="cat" />
      <div className="-m-2 flex flex-wrap">
        <article className="joke">
          <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-5476404733919333"
            data-ad-slot="5139686620"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </article>
        {props.items[2].map((item): JSX.Element => {
          return (
            <JokeThumbnail
              item={item}
              key={item.id}
              showcats={true}
              short={true}
            />
          );
        })}
      </div>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { jokeid } = query;
  const cats = chunk(shuffle(catsdata), 7);
  // const datatoken = await doQuery(
  //   gql`
  //     query MyQuery($id: String = "") {
  //       queryDdbsByByAppCat(type: $id, first: 10) {
  //         items {
  //           id
  //           joke
  //         }
  //       }
  //     }
  //   `,
  //   {id: cronidjokes}
  // );
  // const nextToken = datatoken.items?.[0]?.joke;
  // const data = await doQuery(
  //   gql`
  //     query MyQuery($id: String!, $nextToken: String = "") {
  //       multi: queryDdbsByByCat(cat: "JOKРазни", first: 25, after: $nextToken) {
  //         items {
  //           id
  //           joke: title
  //           cat
  //         }
  //       }
  //     }
  //   `,
  //   {
  //     id: jokeid as string,
  //     multi: true,
  //     nextToken,
  //   }
  // );
  const joke = await db.get(jokeid as string);

  const jokes = await db.view("joke/random", {
    key: Math.floor(Math.random() * 1938).toString(),
    update: "lazy",
    reduce: false,
  });

  const items = chunk(jokes.rows, Math.round(jokes.rows.length / 3));

  return {
    props: {
      joke: { ...joke, joke: joke.title },
      items: items,
      cats,
    },
  };
};
export const runtime = "experimental-edge";
export default SingleJoke;
