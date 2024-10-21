import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

interface BlogPostProps {
  file: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ file }) => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading the markdown file:', error));
  }, [file]);

  return (
    <div className="blog-post">
      {content ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
          {content}
        </ReactMarkdown>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;