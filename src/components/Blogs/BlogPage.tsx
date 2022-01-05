import { VFC } from 'react';
import { BlogItem } from './BlogItem';

type Props = {
  posts: any;
};

export const BlogPage: VFC<Props> = ({ posts }) => {
  return (
    <div>
      <h2>Blog一覧</h2>
      {posts.map((post: any) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
};
