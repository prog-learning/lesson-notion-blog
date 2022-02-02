import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from 'src/components/Home/HomePage';
import { getPosts } from 'src/lib/notion';

export const getStaticProps = async () => {
  const currentThreePosts = await getPosts(3);
  console.log(currentThreePosts);

  return {
    props: { currentThreePosts },
    revalidate: 60,
  };
};

type Props = {
  currentThreePosts: any[];
};

const Home: NextPage<Props> = ({ currentThreePosts }) => {
  console.log(currentThreePosts);
  return (
    <>
      <Head>
        <title>Notion Blog</title>
      </Head>
      <HomePage currentThreePosts={currentThreePosts} />
    </>
  );
};

export default Home;
