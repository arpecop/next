import dynamic from "next/dynamic";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import useLocalStorage from "../hooks/storage";
import { UserType } from "../TopNav";
import Upload from "./inputs/Upload";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const Editor = ({
  parrent,
  user,
  type,
  items,
  placeholder,
  expanded,
  val,
  addPhoto,
}: {
  parrent: [...string[], number | string];
  user?: UserType;
  type: "new" | "reply";
  items?: { name: string; slug: string }[];
  selected?: string;
  placeholder?: string;
  expanded?: boolean;
  val?: string;
  addPhoto?: boolean;
}) => {
  const [value, setValue] = useState(val || "");
  const [title, setTitle] = useState("");
  const [focus, setFocus] = useState(!!expanded);

  const [images] = useLocalStorage<string[]>("user", []);
  const { asPath } = useRouter();
  const onChange = useCallback((valx: string) => {
    setValue(valx);
  }, []);
  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: false,
      spellChecker: false,
      placeholder: placeholder || "Съдържание (не е задължително)",
    };
  }, []);
  useEffect(() => {
    if (focus) {
      Router.push(`/cars/create/${parrent.join("__")}`);
    }
  }, [focus, parrent]);

  const publish = async () => {
    // post
    //  {
    //    parrent,
    //    value,
    //    user,
    //    title,
    //    images,
    //    type,
    //  }

    if (parrent[2]) {
      // Router.push(
      //   `/cars/post/${parrent[2]}/#${d.data.insert_userposts_one.uid}`
      // );
      // Router.reload();
    } else {
      Router.push(`/cars/${parrent.join("__")}`);
    }
    //Router.reload();
  };

  return user ? (
    <>
      {focus || asPath.includes("post") ? (
        <>
          <div className={type === "new" ? "fullscreenx" : ""}>
            {type === "new" && (
              <>
                <div className='container mx-auto my-4'>
                  <select
                    className='dropselector'
                    defaultValue={parrent.slice().reverse()[0]}
                  >
                    {items?.map(({ name, slug }) => (
                      <option key={slug} value={slug}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            <div className='container mx-auto p-2'>
              <div className='relative mb-2 flex'>
                {type === "new" && (
                  <>
                    <div className='absolute bottom-0 right-0  p-3 text-xs'>
                      {title.length}/300
                    </div>
                    <TextareaAutosize
                      autoFocus={true}
                      value={title}
                      maxLength={300}
                      placeholder={placeholder || "Заглавие"}
                      className='w-full  rounded-md border border-gray-400 bg-white p-2 pr-12 text-black'
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </>
                )}
              </div>
              {addPhoto && <Upload />}
              <SimpleMDE
                value={value}
                onChange={onChange}
                options={autofocusNoSpellcheckerOptions}
              />
              <div className='flex w-full'>
                <div className='flex-1' />
                {type === "new" && (
                  <button
                    className='btn btn-secondary btn-sm mr-2'
                    onClick={() => {
                      setFocus(false);
                    }}
                  >
                    Откажи
                  </button>
                )}
                <button
                  className='btn btn-primary btn-sm'
                  onClick={() => {
                    publish();
                  }}
                >
                  Публикувай
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <input
          type='text'
          className='w-full rounded-lg border border-gray-500 bg-white p-2'
          placeholder={"Нова тема"}
          onFocus={() => setFocus(true)}
        />
      )}
    </>
  ) : (
    <div className='z-20 flex w-full pr-2 pt-3'>
      <div className='flex-1' />
      <Link href='/auth/'>
        <a className='btn btn-primary btn-sm' href='#x'>
          Коментар
        </a>
      </Link>
    </div>
  );
};

export default Editor;
