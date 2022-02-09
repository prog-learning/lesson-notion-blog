import { useMemo, useState, VFC } from 'react';
import { BlogItem } from './BlogItem';

type Props = {
  posts: any;
};

export const BlogPage: VFC<Props> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6); // 1ページの記事数
  const maxPage = useMemo(
    () => Math.ceil(posts.length / perPage),
    [posts.length, perPage],
  );

  /* 現在表示している posts */
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, perPage, posts]);

  /* 次のページへ */
  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / perPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  /* 前のページへ */
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2 className='text-center font-bold text-xl underline underline-offset-8 decoration-lime-600'>
        Blog一覧
      </h2>

      <div className='flex justify-center items-center gap-8 mt-8'>
        <button className='font-bold underline' onClick={prevPage}>
          &lt;&lt; 前のページへ
        </button>
        <div>
          {currentPage} / {maxPage}
        </div>
        <button className='font-bold underline' onClick={nextPage}>
          次のページへ &gt;&gt;
        </button>
      </div>

      <div className='border-2 w-[600px] mt-10 mx-auto divide-y-2 divide-gray-400 rounded-lg border-gray-400'>
        {currentPosts.map((post: any) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>

      <div className='flex justify-center items-center gap-8 mt-8'>
        <button className='font-bold underline' onClick={prevPage}>
          &lt;&lt; 前のページへ
        </button>
        <div>
          {currentPage} / {maxPage}
        </div>
        <button className='font-bold underline' onClick={nextPage}>
          次のページへ &gt;&gt;
        </button>
      </div>
    </div>
  );
};
