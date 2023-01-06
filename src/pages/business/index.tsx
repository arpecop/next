import type {GetServerSideProps} from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import Nav from "@/components/Nav";

import {getPaging, refreshToken} from "../../components/NewPagination";

import type {Cat} from "../../utils/formatter";
import {businessdata} from "../../utils/formatter";
import {doQuery, gql} from "../api/graphql";

export type Company = {
  _id: string;
  name: string;
  zip: number;
  location: string;
  uid?: string;
  created_at: number;
};

const Index = ({cats}: {cats: Cat[]}): JSX.Element => {
  return (
    <Main meta={<Meta title="Бизнес фирми" description="Бизнес фирми" />}>
      <Nav cats={cats} prefix="business" limit={50} />
      <div className="my-10 flex w-full flex-col">
        <div className="flex flex-wrap" />
      </div>
      <p className="text-center text-xs font-thin">
        Източник на информацията: Официални регистри на Националната агенция по
        приходите и Комисия за защита на личните данни.
      </p>
    </Main>
  );
};

const qindex = gql`
  query MyQuery($nextToken: String = "") {
    queryDdbsByByLetter(type: "CompaniesBG", first: 50, after: $nextToken) {
      items {
        title
        year: subcat
        year2: deepness
        letter
        zip: cat
        location
        id
      }
    }
  }
`;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const pagenum = context.query.page ? Number(context.query.page) : 1;
  const nextTokenCurrent = await getPaging("businessindex", pagenum);

  const data = await doQuery(qindex, {
    nextToken: nextTokenCurrent,
  });
  await refreshToken("businessindex", pagenum, data.nextToken);

  return {
    props: {
      cats: businessdata,
    },
  };
};
export default Index;
