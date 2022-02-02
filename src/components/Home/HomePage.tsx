import { useState, VFC } from 'react';
import { BlogItem } from '../Blogs/BlogItem';
import { Button } from './Button';

type Props = {
  currentThreePosts: any[];
};

export const HomePage: VFC<Props> = ({ currentThreePosts }) => {
  console.log(currentThreePosts);
  return (
    <div className='text-center'>
      <h2 className='text-xl'>最近の記事</h2>
      <div className='border-2 w-[600px] mt-4 mx-auto divide-y-2 divide-gray-400 rounded-lg border-gray-400'>
        {currentThreePosts?.map((post) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
