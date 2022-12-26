import React from "react";

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

export const getServerSideProps = async () => {
  return { props: {} };
};

export default Forum;
