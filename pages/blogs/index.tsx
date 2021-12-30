import type { GetStaticProps, NextPage } from 'next';
import { Client } from '@notionhq/client';
import {
  GetDatabaseResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { useRouter } from 'next/router';

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

type Props = {
  data: {
    database: GetDatabaseResponse;
    query: QueryDatabaseResponse;
  };
};
export const getStaticProps = async () => {
  const database_id = process.env.NOTION_DATABASE_ID || '';
  const database = await notion.databases.retrieve({
    database_id,
  });
  const query = await notion.databases.query({
    database_id,
    filter: {
      or: [
        {
          property: 'publish',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  });

  return {
    props: {
      data: {
        database,
        query,
      },
    },
  };
};

const Blog: NextPage<Props> = ({ data }) => {
  console.log(data);
  const list = data.query?.results || [];
  const router = useRouter();

  return (
    <div>
      <h2>Blog一覧</h2>
      {list.map((item) => (
        <div key={item.id}>
          <h3>
            {item.properties.title.type === 'title' &&
              item.properties.title.title[0].plain_text}
          </h3>
          <p>
            カテゴリ：
            {(item.properties.category.type === 'select' &&
              item.properties.category.select?.name) ||
              'カテゴリなし'}
          </p>
          <p>
            日付：
            {(item.properties.date.type === 'date' &&
              item.properties.date.date?.start) ||
              '日付なし'}
          </p>
          <button onClick={() => router.push(`/blogs/${item.id}`)}>詳細</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blog;
