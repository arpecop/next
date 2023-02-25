import { NextApiRequest } from "next";
import { Ad } from "src/API";

import Layout from "@/components/Main";

import { SideBarContainer } from "../";
export type OptionalField = {
  name: string;
  placeholder: string;
  value: string;
  type: string;
  alt?: string;
};
export const Optional = ({
  item,
  data,
}: {
  item: Ad;
  data: {
    [key: string]: OptionalField | OptionalField[];
    images: OptionalField[] | [];
  };
}) => {
  const details = Object.values(data).map((detail) =>
    Array.isArray(detail) ? (
      <div className={"w-full"} id={detail[0].name} key={detail[0].name}>
        {detail.map((x, i) => {
          return (
            <div className='grid grid-cols-2' key={i}>
              <div className='lefti text-right pr-2'>
                {i === 0 ? x.placeholder : " "} :
              </div>
              <div className='righti overflow-hidden text-ellipsis'>
                {x.value}
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div className={"grid grid-cols-2"} id={detail.name} key={detail.name}>
        <div className='lefti text-right pr-2 font-bold'>
          {detail.placeholder} :
        </div>
        <div className='righti overflow-hidden text-ellipsis'>
          {detail.value} {detail.alt}
        </div>
      </div>
    )
  );
  return (
    <Layout disableContainer={true}>
      <SideBarContainer>
        <div className='space-y-4 emper text-xs adwrapper'>{details}</div>
      </SideBarContainer>
      <div className='w-full'>
        <h1 className='text-5xl'>{item.title}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {data.images?.map((image) => {
            return <img src={image.value} key={image.value} />;
          })}
        </div>
        <div className='ember'>
          {item.description
            ?.replace(/\n\s*\n/g, "\n")
            .split("\n")
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (req: NextApiRequest) => {
  const singlead = [] as any;

  return {
    props: {
      item: singlead,
      data: JSON.parse(singlead.data.getAd.data),
    },
  };
};
export const runtime = "experimental-edge";

export default Optional;
