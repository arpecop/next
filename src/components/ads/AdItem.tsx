import Link from "next/link";
import type { Ad } from "@/API";
import { convertToTimeago } from "../helpers/date";

const AdItem = ({
  id,
  title,
  images,
  description,
  createdAt,
  condition,
  currency,
  price,
}: Ad) => {
  return (
    <Link
      href={`/ads/ad/${id}`}
      className={
        "w-full rounded-xl bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-0.5 transition-all hover:scale-[1.01] "
      }
    >
      <div className='relative flex h-full w-full flex-col justify-between rounded-lg bg-gray-900  first-letter: dark:bg-white'>
        <>
          <div className='flex h-40 w-full overflow-hidden  items-center justify-center relative'>
            {condition === "NEW" && (
              <span className='absolute top-2 left-2 p-0.5 bg-red-800   px-2 rounded-md  text-xs text-slate-300'>
                НОВ
              </span>
            )}
            {images?.[0] ? (
              <img src={images?.[0]} alt='' className='rounded-t-md' />
            ) : (
              <img src='/no-image.png' alt='' className='rounded-t-md' />
            )}

            <div className='text-xs absolute left-2 bottom-2'>
              {convertToTimeago(new Date())}
            </div>
          </div>
          {price && price > 0 && (
            <div className='absolute top-2 right-2  p-0.5 bg-red-800 px-2 rounded-md   text-2xl font-light text-slate-300'>
              {JSON.stringify(price)}
              <span className='absolute ml-1 text-sm'>{currency || "лв."}</span>
              <span className='ml-1 text-red-800 text-sm'>
                {currency || "лв."}
              </span>
            </div>
          )}
          <h3 className='text-lg font-bold text-white dark:text-gray-900 mx-2'>
            {title.slice(0, 40)}
          </h3>
          {description && description.length > 100 && (
            <p className='text-sm text-white dark:text-gray-900 mx-2 ember'>
              {description.slice(0, 100)} ...
            </p>
          )}
        </>
      </div>
    </Link>
  );
};

export default AdItem;
