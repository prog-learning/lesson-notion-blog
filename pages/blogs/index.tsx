import type { NextPage } from 'next';
import Head from 'next/head';

import { BlogPage } from 'src/components/Blogs/BlogPage';
import { getPosts } from 'src/lib/notion';

type Props = {
  posts: any;
};

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 10,
  };
};

const Blog: NextPage<Props> = ({ posts = [] }) => {
  return (
    <>
      <Head>
        <title>Blogs | Notion Blog</title>
      </Head>
      <BlogPage posts={posts} />
    </>
  );
};

export default Blog;
