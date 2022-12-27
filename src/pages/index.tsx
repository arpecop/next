import Link from "next/link";
import { useRouter } from "next/router";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";
import { Program } from "@/components/Program";
import { catsdata } from "@/utils/formatter";

const MoreButton = ({
  text,
  type,
}: {
  text: string;
  type: string;
}): JSX.Element => (
  <Link
    href={{ pathname: "/", query: { type } }}
    passHref={true}
    className='btn-primary btn-active btn dark:btn-ghost'
  >
    {text}
  </Link>
);

const Index = () => {
  const router = useRouter();
  const {
    query: { type },
  } = router;
  const cats = catsdata.sort((a, b) => b.count - a.count);
  return (
    <Main
      meta={
        <Meta
          title='Вицове и забавни котки и мемета'
          description='Вицове и забавни котки и мемета'
        />
      }
    >
      {type === "Jokes" && <Nav cats={cats} prefix='cat' />}
      {type === "Program" && (
        <Program className='container flex flex-wrap items-center justify-center sm:mx-auto' />
      )}
      {!type && (
        <>
          <Nav cats={cats} limit={9} prefix='cat' />
          <div className='flex flex-wrap justify-end mb-2'>
            <MoreButton text='всички категории' type='Jokes' />
          </div>
          <Program
            limit={12}
            className='mb-2 grid crid-cols-3 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2'
          />
          <div className='flex flex-wrap justify-end'>
            <MoreButton text='Oще Memeта' type='Program' />
          </div>
        </>
      )}
    </Main>
  );
};

export async function getStaticProps() {
  return {
    props: { lastupdate: new Date().toISOString() },
  };
}

export default Index;

console.log("test");
