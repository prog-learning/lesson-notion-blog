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

  const results = [];

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
  results.push(...query.results);
  if (page_size === 3) return results;

  /* 記事を全部取得する処理 */
  let has_more = query.has_more;
  let next_cursor = query.next_cursor;

  while (has_more) {
    if (!next_cursor) {
      break;
    }
    const query = await notion.databases.query({
      database_id,
      page_size,
      start_cursor: next_cursor,
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

    results.push(...query.results);

    has_more = query.has_more;
    next_cursor = query.next_cursor;
  }

  console.log(query.has_more);
  console.log(query.next_cursor);

  return results;
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
