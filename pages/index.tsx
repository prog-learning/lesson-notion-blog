import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from 'src/components/Home/HomePage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notion Blog</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
