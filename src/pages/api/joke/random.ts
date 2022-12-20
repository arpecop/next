import { doQuery } from '@/data/client';
import { gql } from '@apollo/client';
import type { NextApiRequest, NextApiResponse } from 'next';



const TOTAL = gql`
  query MyQuery {
    jokes_aggregate {
      aggregate {
        count
      }
    }
  }
`;

const DATA_QUERY = gql`
  query MyQuery($offset: Int!) {
    jokes(limit: 3, offset: $offset) {
      _id
      cat
      joke
    }
  }
`;
//test
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {

  const data = await doQuery(DATA_QUERY,
    {
      offset: Math.floor(
        Math.random() * 111
      ),
    },
  );

  res.status(200).json(data);
}
