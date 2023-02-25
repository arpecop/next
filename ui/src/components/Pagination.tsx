import Link from "next/link";

export function generateHash() {
  const possibleSymbols =
    "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const base = possibleSymbols.length;
  let id = Math.floor(Math.random() * (Math.pow(base, 4) - 1));
  let hash = "";

  while (id > 0) {
    hash = possibleSymbols.charAt(id % base) + hash;
    id = Math.floor(id / base);
  }

  // Pad the hash with leading zeros if necessary
  hash = hash.padStart(4, "0");

  return hash;
}

//const data = await await API.graphql( graphqlOperation(queries.getAd, { id: token }));

// Define the Pagination React component
const Pagination = () => {
  return (
    <div>
      <Link href='' passHref>
        Next
      </Link>
    </div>
  );
};

// Export the Pagination React component
export default Pagination;
