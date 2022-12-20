import { doQuery } from '@/data/client';
import { gql } from '@apollo/client';
import type { NextApiRequest, NextApiResponse } from 'next';



const DATA_QUERY = gql`
  query MyQuery($id: String!) {
    jokes_by_pk(_id: $id) {
      _id
      cat
      joke
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string

  const data = await doQuery(DATA_QUERY,
    { id }
  );

  res.status(200).json(data);
}
