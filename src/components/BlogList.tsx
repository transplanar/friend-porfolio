import React from 'react';
import BlogPost from './BlogPost';

const posts = [
  { title: 'Example Post', file: '/posts/test.md' },
  { title: 'Another Post', file: '/posts/test2.md' },
];

const BlogList: React.FC = () => {
  return (
    <div className="blog-list">
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <BlogPost file={post.file} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;