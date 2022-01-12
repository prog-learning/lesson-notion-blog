import { useRouter } from 'next/router';
import { VFC } from 'react';

type Props = {
  post: any;
};

export const BlogItem: VFC<Props> = ({ post }) => {
  const router = useRouter();

  return (
    <div
      className='py-4 px-8 hover:bg-lime-50 cursor-pointer first:pt-6 first:rounded-t-lg last:pb-6 last:rounded-b-lg'
      onClick={() => router.push(`/blogs/${post.id}`)}
    >
      <h3 className='font-bold border-b border-gray-400 pb-2'>
        {post.properties.title.type === 'title' &&
          post.properties.title.title[0].plain_text}
      </h3>
      <div className='p-2 space-y-4'>
        <p>
          カテゴリ：
          <span className='rounded bg-lime-400 text-white font-bold px-2 py-1'>
            {(post.properties.category.type === 'select' &&
              post.properties.category.select?.name) ||
              'カテゴリなし'}
          </span>
        </p>
        <p>
          日付：
          {(post.properties.date.type === 'date' &&
            post.properties.date.date?.start) ||
            '日付なし'}
        </p>
      </div>
    </div>
  );
};
