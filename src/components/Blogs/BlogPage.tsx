import { VFC } from 'react';
import { BlogItem } from './BlogItem';

type Props = {
  posts: any;
};

export const BlogPage: VFC<Props> = ({ posts }) => {
  return (
    <div>
      <h2 className='text-center font-bold text-xl underline underline-offset-8 decoration-lime-600'>
        Blog一覧
      </h2>
      <div className='border-2 w-[600px] mt-10 mx-auto divide-y-2 divide-gray-400 rounded-lg border-gray-400'>
        {posts.map((post: any) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
