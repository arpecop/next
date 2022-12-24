import { forEach } from 'lodash';
import React from 'react';
import { API, graphqlOperation, mutations, queries } from '/components/db';
import loadStaticFile from '/components/helpers/loadStaticFile';

type Props = {
  topics: Array<{
    id: number;
    title: string;
    description: string;
  }>;
};

const Forum = ({ topics }: Props) => {
  return (
    <div>
      <h1>Forum Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <h2>xxx {topic.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async ({
  query,
}: {
  query: { forum: string[] };
}) => {
  const insertx = await API.graphql(
    graphqlOperation(
      `query MyQuery {
		listPosts(filter: {parrent: {eq: "cars"}}, limit: 5000) {
		  nextToken
		  items {
			title
			deepness
		  }
		}
	  }
`,
    ),
  );
  //   const carsData = await loadStaticFile('carsData');
  //
  //   const mutationsx = carsData
  //     .flatMap((carx) => carx.items)
  //     .map((x) => ({
  //       input: {
  //         id: x.slug,
  //         title: x.name,
  //         deepness: 2,
  //         images: ['"https://eziktok.com/models/' + x.image + '"'],
  //         parrent: 'cars',
  //         from: 'admin',
  //       },
  //     }));
  //   console.log(mutationsx);
  //   forEach(mutationsx, async function (x) {
  //     await API.graphql(graphqlOperation(mutations.createPost, x))
  //       .then((data) => console.log(data))
  //       .catch((e) => console.log(e));
  //   });

  console.log(
    `one:createPost(input: {parrent: "cars", deepness: 9999, title: "test"}) { id }`,
  );

  return { props: { topics: insertx.data.listPosts.items } };
};

export default Forum;
