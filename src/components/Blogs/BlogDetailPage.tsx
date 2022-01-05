import { useRouter } from 'next/router';
import { VFC } from 'react';

type Props = {
  content: any;
};

export const BlogDetailPage: VFC<Props> = ({ content }) => {
  const router = useRouter();
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
