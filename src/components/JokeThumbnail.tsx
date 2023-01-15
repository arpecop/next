import {MouseEvent, useEffect, useState} from "react";

import {FormatJoke} from "@/components/JokeText";

import type {Doc} from "../data/structure";
import FacebookShare from "./FacebookShare";

interface Props {
  item: Doc;
  id?: string;
  showcats?: boolean;
  short: boolean;
  hideReadMore?: boolean;
  onClick?: (event: MouseEvent) => void;
}

const JokeThumbnail = ({item, showcats, short, hideReadMore}: Props) => {
  const {joke, cat, id} = item;
  const jlen = joke.length <= 150;
  const [popup, setPopup] = useState(false);
  const [expandedJoke, setexpandedJoke] = useState<string>("");
  useEffect(() => {
    const getjoke = async () => {
      const d1 = await fetch("/api/data/db/" + id);
      const d = await d1.json();

      setexpandedJoke(d.title);
    };
    if (popup) {
      getjoke();
    }
  }, [popup]);

  return (
    <article className="joke relative">
      {showcats && item.cat !== "Разни" && (
        <a
          className="joketop text-shadow"
          href={`/cat/${cat.replace(/ /g, "%20")}/`}
        >
          <h2>{cat.replace("JOK", "")}</h2>
        </a>
      )}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg z-20 overflow-auto">
          <div className="max-w-md">
            <FormatJoke joke={expandedJoke} />
            <div className="flex justify-center items-center">
              <div className="btn-group">
                <FacebookShare
                  id={`https://kloun.lol/joke/${item.id}`}
                  text="Сподели"
                />

                <button className="btn" onClick={() => setPopup(false)}>
                  Затвори
                  <svg
                    xmlns="http://w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <a href={`/joke/${item.id}`} className="btn m-0 mt-2">
              <svg
                xmlns="http://w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
              Url
            </a>
          </div>
        </div>
      )}

      <div className="jokewrap">
        <div className="py-5 font-black text-md">
          <FormatJoke joke={joke} short={short} />
        </div>
      </div>
      {!hideReadMore &&
        (!jlen ? (
          <a
            className="btn absolute right-2 -mt-12 flex cursor-pointer border-gray-800 bg-black shadow-lg dark:border-gray-500 dark:bg-white rounded-l-none rounded-t-none"
            href={`/joke/${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              setPopup(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
              />
            </svg>
          </a>
        ) : (
          <div className="absolute right-2 -mt-12">
            <FacebookShare id={`https://kloun.lol/joke/${item.id}`} noWrapper />
          </div>
        ))}
    </article>
  );
};
export default JokeThumbnail;
