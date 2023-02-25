import React from 'react';

type BlogPostProps = {
  title: string;
  content: string;
  image?: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ title, content, image }) => {
  // Split the content string into an array of paragraphs
  const paragraphs = content.split('\n');

  return (
    <div>
      <div className='font-bold text-xl mb-2'>{title}</div>
      {image && <img className='w-full' src={image} alt={title} />}
      <div className='px-6 py-4'>
        {/* Map the paragraphs array to a set of paragraph elements */}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className='text-gray-700 text-base'>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
