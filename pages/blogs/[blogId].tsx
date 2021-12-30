import { Client } from '@notionhq/client';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogId =
    typeof params?.blogId === 'string'
      ? params?.blogId || params?.blogId[0]
      : '';

  const page = await notion.pages.retrieve({
    page_id: blogId,
  });
  const blocks = await notion.blocks.children.list({
    block_id: blogId,
  });
  console.log(blocks);

  return {
    props: {
      content: {
        page,
        blocks,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const database_id = process.env.NOTION_DATABASE_ID || '';
  const query = await notion.databases.query({
    database_id,
  });
  const blogIds = query.results.map((item) => item.id);
  console.log(blogIds);

  return {
    paths: blogIds.map((id) => ({
      params: { blogId: id },
    })),
    fallback: false,
  };
};

type Props = {
  content: any;
};

const BlogDetail: NextPage<Props> = ({ content }) => {
  const router = useRouter();
  console.log(content);
  const title = content.page.properties.title.title[0].plain_text;
  const blocks = content.blocks.results;

  return (
    <div>
      <h2>{title}</h2>
      <p>このブログのIDは{router.asPath.split('/')[2]}</p>
      {blocks.map((block: any) => {
        console.log(block);
        if (block.type === 'paragraph') {
          return (
            <div key={block.id}>
              <p>{block.paragraph.text[0]?.plain_text || '　'}</p>
            </div>
          );
        }
        if (block.type === 'heading_2') {
          return (
            <div key={block.id}>
              <h2>{block.heading_2.text[0]?.plain_text || ' '}</h2>
            </div>
          );
        }
        if (block.type === 'bulleted_list_item') {
          return (
            <div key={block.id}>
              <li>{block.bulleted_list_item.text[0]?.plain_text || ' '}</li>
            </div>
          );
        }
      })}
    </div>
  );
};

export default BlogDetail;
