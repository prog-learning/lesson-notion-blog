import { VFC } from 'react';

type Props = {};

export const AboutPage: VFC<Props> = () => {
  return (
    <div>
      <h1>このブログにについて</h1>
      <p>このブログはNotionのノートがそのまま反映されるすごいBlogです.</p>
      <h2>使用していいる技術</h2>
      <li>Next.js</li>
      <li>TypeScript</li>
      <li>Notion API</li>
      <li>Tailwind</li>
      <li>SWR</li>
    </div>
  );
};
