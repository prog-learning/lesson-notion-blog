import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

const database_id = process.env.NOTION_DATABASE_ID || '';

/* 記事の一覧を取得 */
export const getPosts = async (page_size: number = 10): Promise<any[]> => {
  /* データベースに関する情報の取得 */
  // const database = await notion.databases.retrieve({
  //   database_id,
  // });

  /* 記事の一覧の取得 */
  const query = await notion.databases.query({
    database_id,
    page_size,
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

  return query.results;
};

/* 記事の詳細を取得 */
export const getPostDetail = async (postId: string): Promise<any> => {
  /* ページに関する情報を取得 */
  const page = await notion.pages.retrieve({
    page_id: postId,
  });
  /* ページの内容を取得 */
  const blocks = await notion.blocks.children.list({
    block_id: postId,
  });

  return {
    page,
    blocks,
  };
};
