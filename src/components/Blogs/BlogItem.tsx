import { useRouter } from 'next/router';
import { VFC } from 'react';

type Props = {
  post: any;
};

export const BlogItem: VFC<Props> = ({ post }) => {
  const router = useRouter();

  return (
    <div>
      <h3>
        {post.properties.title.type === 'title' &&
          post.properties.title.title[0].plain_text}
      </h3>
      <p>
        カテゴリ：
        {(post.properties.category.type === 'select' &&
          post.properties.category.select?.name) ||
          'カテゴリなし'}
      </p>
      <p>
        日付：
        {(post.properties.date.type === 'date' &&
          post.properties.date.date?.start) ||
          '日付なし'}
      </p>
      <button onClick={() => router.push(`/blogs/${post.id}`)}>詳細</button>
      <hr />
    </div>
  );
};
