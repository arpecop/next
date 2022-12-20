import { gql } from '@apollo/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { doQuery } from '@/data/client';

 

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

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
 
  const   data  = await doQuery(  DATA_QUERY,
     {
      offset: Math.floor(
        Math.random() * 111
      ),
    },
   );

  res.status(200).json(data);
}
