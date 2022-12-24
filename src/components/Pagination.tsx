import { API, graphqlOperation } from 'aws-amplify';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { queries, mutations } from './db';

export function generateHash() {
  const possibleSymbols =
    'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const base = possibleSymbols.length;
  let id = Math.floor(Math.random() * (Math.pow(base, 4) - 1));
  let hash = '';

  while (id > 0) {
    hash = possibleSymbols.charAt(id % base) + hash;
    id = Math.floor(id / base);
  }

  // Pad the hash with leading zeros if necessary
  hash = hash.padStart(4, '0');

  return hash;
}

//const data = await await API.graphql( graphqlOperation(queries.getAd, { id: token }));

// Define the Pagination React component
const Pagination = ({
  token,
  section,
}: {
  token?: string;
  section: string;
}) => {
  const [dataid, setDataid] = useState<string | null>(null);

  useEffect(() => {
    async function shorter() {
      const q = await API.graphql(
        graphqlOperation(queries.getAd, { id: token?.slice(0, 51) }),
      );
      console.log(q.data.getAd, token);
      if (!q.data.getAd) {
        const id = generateHash();

        await API.graphql(
          graphqlOperation(mutations.createAd, {
            input: {
              id: token?.slice(0, 51),
              title: id,
              description: token,
              type: section,
              price: 0,
            },
          }),
        );
        setDataid(id);
      } else {
        setDataid(q.data.getAd.title);
      }
    }
    shorter();
  }, []);

  return (
    <div>
      <Link href='' passHref>
        Next {dataid}
      </Link>
    </div>
  );
};

// Export the Pagination React component
export default Pagination;
