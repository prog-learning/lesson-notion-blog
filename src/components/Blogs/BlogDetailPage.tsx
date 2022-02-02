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
      <h1 className='text-2xl font-bold my-4'>{title}</h1>
      <p>このブログのIDは{router.asPath.split('/')[2]}</p>
      <div className='space-y-4'>
        {blocks.map((block: any) => {
          // console.log(block);
          if (block.type === 'paragraph') {
            return (
              <div key={block.id}>
                <p>{block.paragraph.text[0]?.plain_text || '　'}</p>
              </div>
            );
          }
          if (block.type === 'heading_1') {
            return (
              <div key={block.id}>
                <h1 className='text-2xl font-bold my-4'>
                  {block.heading_2.text[0]?.plain_text || ' '}
                </h1>
              </div>
            );
          }
          if (block.type === 'heading_2') {
            return (
              <div key={block.id}>
                <h2 className='text-xl font-bold my-4'>
                  {block.heading_2.text[0]?.plain_text || ' '}
                </h2>
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
          if (block.type === 'quote') {
            return (
              <div
                key={block.id}
                className='border-l-4 border-orange-400 pl-4 py-2'
              >
                {block.quote.text[0]?.plain_text || ' '}
              </div>
            );
          }
          if (block.type === 'divider') {
            return <div key={block.id} className='w-full h-px bg-gray-400' />;
          }
        })}
      </div>
    </div>
  );
};
