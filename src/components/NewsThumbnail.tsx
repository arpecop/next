import Link from "next/link";
import React from "react";
import {slugify} from "@/utils/formatter";

const NewsThumbnail = ({
  title,
  image,
  uid,
}: {
  title: string;
  image?: string;
  uid: string;
}) => (
  <article className="relative flex w-full grow cursor-pointer p-2 md:w-1/2 lg:w-1/3">
    <Link
      href={`/news/i/${slugify(title)}/${uid}/`}
      passHref
      className="newswrap"
    >
      <div className="flex  w-full items-center ">
        <div className="flex items-center justify-center">
          {image && (
            <img alt={title} src={image} className="h-36 w-1/3 object-cover" />
          )}
          <h3 className="px-2 font-bold text-slate-300 dark:text-gray-800">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  </article>
);

export default NewsThumbnail;
