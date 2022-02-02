import { useRouter } from 'next/router';
import { VFC } from 'react';
import { NotionBlock } from '../NotionBlock';

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
          return <NotionBlock key={block.id} block={block} />;
        })}
      </div>
    </div>
  );
};
