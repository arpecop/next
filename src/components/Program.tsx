import {useRef, useEffect, LegacyRef, useState} from "react";

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
  const checkboxRef: LegacyRef<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const handleChange = () => {
      if (checkboxRef.current) {
        console.log(checkboxRef.current.checked);
        if (!checkboxRef.current.checked) {
          setImg(null);
          document.body.style.overflow = "auto";
        } else {
          document.body.style.overflow = "hidden";
        }
      }
    };

    if (checkboxRef.current) {
      checkboxRef.current.addEventListener("change", handleChange);
    }
    return () => {
      if (checkboxRef.current) {
        checkboxRef.current.removeEventListener("change", handleChange);
      }
    };
  }, [checkboxRef]);
  async function fetchMyAPI(older?: number) {
    const res2 = await fetch(
      `/api/proxy?url=https://pr0gramm.com/api/items/get?flags=1&promoted=1${
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
        className="invisible"
        ref={checkboxRef}
      />
      {img && (
        <label
          htmlFor="my-modal"
          className="cursor-pointer fixed top-0 left-0 w-screen h-screen  z-60 flex justify-center items-center backdrop-blur-md bg-black/30"
        >
          <div className="w-3/4  flex items-center justify-center">
            {img?.includes("mp4") ? (
              <video
                controls
                autoPlay
                className="rounded-md   z-50 aspect-auto max-h-screen rounded-md w-auto border border-4  border-black"
              >
                <source src={"https://vid.pr0gramm.com/" + img} />
              </video>
            ) : (
              <picture className="z-50">
                <img
                  src={"https://img.pr0gramm.com/" + img}
                  alt=""
                  className="aspect-auto max-h-screen rounded-md border border-4  border-black"
                />
              </picture>
            )}
          </div>
        </label>
      )}
    </div>
  );
};
export {Program};
