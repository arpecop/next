/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';
import type {GetServerSideProps} from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

import {Company} from "..";

const Index = ({
  companies_by_pk: {name, zip, location, created_at},
}: {
  companies_by_pk: Company;
}): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={name.toLowerCase()}
          description={`${name} ${location} ${zip} България`}
        />
      }
    >
      <div className="my-10 flex w-full flex-col">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Име
              </th>
              <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Локация
              </th>
              <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Създадена
              </th>
              <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                П.Код
              </th>
            </tr>
          </thead>
          <tbody className="dark:bg-slate-500">
            <tr>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {name}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {location}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {created_at}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {zip}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const id = query.id as string;

  const data = {name: "", zip: 111, location: ""};

  return {
    props: {
      id,
      ...data,
    },
  };
};
export default Index;
