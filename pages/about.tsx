import type { NextPage } from 'next';
import Head from 'next/head';
import { AboutPage } from 'src/components/About/AboutPage';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Notion Blog</title>
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
