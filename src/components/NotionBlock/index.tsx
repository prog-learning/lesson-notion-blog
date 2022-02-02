import { VFC } from 'react';

type NotionBlockProps = {
  block: any;
};

export const NotionBlock: VFC<NotionBlockProps> = ({ block }) => {
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
      <div key={block.id} className='border-l-4 border-orange-400 pl-4 py-2'>
        {block.quote.text[0]?.plain_text || ' '}
      </div>
    );
  }
  if (block.type === 'divider') {
    return <div key={block.id} className='w-full h-px bg-gray-400' />;
  }
  return <div>[{block.type}]は非対応Blockです！</div>;
};
