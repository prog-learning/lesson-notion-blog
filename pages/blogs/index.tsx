import type { GetStaticProps, NextPage } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

type Props = {
  data: any;
};
export const getStaticProps = async () => {
  const database_id = process.env.NOTION_DATABASE_ID || '';
  const response = await notion.databases.retrieve({
    database_id,
  });
  console.log(response);

  return {
    props: {
      data: response,
    },
  };
};

const Blog: NextPage<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Blog一覧</h2>
      <p>{data.properties.category.select.options[1].name}</p>
    </div>
  );
};

export default Blog;
