import {useRef, useEffect, RefObject, useState} from "react";
import {Exclude} from "TypeScript";

type NonNullableHTMLInputElement = Exclude<HTMLInputElement, null | undefined>;

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

const Program = ({limit, className}: {limit?: number; className: string}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [img, setImg] = useState<string | null>(null);
  const checkboxRef: RefObject<NonNullableHTMLInputElement> = useRef(null);

  useEffect(() => {
    const handleChange = () => {
      if (!checkboxRef.current.checked) {
        setImg(null);
      }
    };
    checkboxRef.current.addEventListener("change", handleChange);
    return () => {
      if (checkboxRef.current) {
        checkboxRef.current.removeEventListener("change", handleChange);
      }
    };
  }, [checkboxRef]);
  async function fetchMyAPI(older?: number) {
    const res2 = await fetch(
      `https://api.codetabs.com/v1/proxy?quest=https://pr0gramm.com/api/items/get?flags=1&promoted=1${
        older ? `&older=${older}` : ""
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
            image,
          }: {
            thumb: string;
            fullsize?: string;
            image?: string;
            id: number;
            promoted: number;
          }) => (
            <label
              key={id}
              className="hover:animate-pulse snap-center"
              htmlFor="my-modal"
              onClick={() => setImg(`${image}`)}
            >
              <div
                className="rounded-lg bg-gradient-to-r from-purple-900 to-pink-600 p-1 dark:from-white dark:to-slate-400 relative m-1 cursor-pointer relative"
                style={{minHeight: 128}}
              >
                <picture>
                  <img
                    className="rounded-lg w-full h-full"
                    alt="pr0gramm"
                    loading="lazy"
                    style={{minWidth: 128}}
                    src={`https://thumb.pr0gramm.com/${thumb}`}
                  />
                </picture>
              </div>
            </label>
          )
        )}

      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle "
        ref={checkboxRef}
      />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label
          className="flex justify-center items-center max-w-md bg-black px-4 rounded-md z-60"
          htmlFor=""
        >
          {img?.includes("mp4") ? (
            <video controls autoPlay className="rounded-md h-fit my-4 z-60">
              <source src={"https://vid.pr0gramm.com/" + img} />
            </video>
          ) : (
            <picture className="z-60">
              <img
                src={"https://img.pr0gramm.com/" + img}
                alt=""
                className="rounded-md max-h-screen my-4 "
              />
            </picture>
          )}
        </label>
      </label>
    </div>
  );
};
export {Program};
