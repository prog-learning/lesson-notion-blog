import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { BlogDetailPage } from 'src/components/Blogs/BlogDetailPage';
import { getPostDetail, getPosts } from 'src/lib/notion';

/* 記事の内容を静的に保存 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogId =
    typeof params?.blogId === 'string'
      ? params?.blogId || params?.blogId[0]
      : '';

  const content = await getPostDetail(blogId);

  return {
    props: {
      content,
    },
    revalidate: 60,
  };
};

/* 記事のpathを静的に保存 */
export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((item) => ({
    params: { blogId: item.id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

type Props = {
  content: any;
};

const BlogDetail: NextPage<Props> = ({ content }) => {
  const title = content.page.properties.title.title[0].plain_text;

  return (
    <>
      <Head>
        <title>{title} | Notion Blog</title>
      </Head>
      <BlogDetailPage content={content} />
    </>
  );
};

export default BlogDetail;
