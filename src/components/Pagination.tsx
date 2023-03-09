import Link from "next/link";

function makeArray({
  pagesToShow,
  items,
  pageSize,
  currentPage,
}: {
  pagesToShow: number;
  items: number | { key: string }[];
  pageSize: number;
  currentPage: number;
}) {
  const middle = Math.floor(pagesToShow / 2);
  const isArr = Array.isArray(items);

  let startIndex = currentPage - middle;
  let endIndex = currentPage + middle;
  const pagesCount = Math.ceil(isArr ? items.length : items / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  if (startIndex < 1) {
    startIndex = 1;
    endIndex = startIndex + pagesToShow;
    if (endIndex > pagesCount) {
      endIndex = pagesCount;
    }
  }

  if (endIndex > pagesCount) {
    endIndex = pagesCount;
    startIndex = endIndex - pagesToShow;
    if (startIndex < 1) {
      startIndex = 1;
    }
  }

  const pagesToRender = pages.slice(startIndex - 1, endIndex);
  return pagesToRender;
}

const Pagination = ({
  items,
  pageSize,
  currentPage,
  prefix,

}: {
  items: number;
  pageSize: number;
  currentPage: number;
  prefix: string;

}) => {
  const pagesToRender = makeArray({
    pagesToShow: 9,
    items,
    pageSize,
    currentPage,
  });
  const pagesToRenderMobile = makeArray({
    pagesToShow: 3,
    items,
    pageSize,
    currentPage,
  });

  return (
    <div className="fixed bottom-0 left-0 z-20 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm rounded-t-xl">
      <div className="btn-group hidden sm:flex">
        {pagesToRender.map((page) => (
          <Link
            passHref
            href={
              page === currentPage
                ? "#"
                : `${prefix}${page === 1 ? (prefix.includes("_") ? 1 : "") : page
                }/`
            }
            key={page}
            className={
              page === currentPage
                ? "btn px-4 font-bold bg-gray-700 dark:bg-gray-500"
                : "btn px-4 font-bold"
            }
          >
            {page}
          </Link>
        ))}
      </div>
      <div className="btn-group   flex sm:hidden">
        {pagesToRenderMobile.map((page) => (
          <Link
            passHref={false}
            href={
              page === currentPage ? "#" : `${prefix}${page === 1 ? "" : page}/`
            }
            key={page}
            className={
              page === currentPage
                ? "btn px-4 font-bold bg-gray-700 dark:bg-gray-500"
                : "btn px-4 font-bold"
            }
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
