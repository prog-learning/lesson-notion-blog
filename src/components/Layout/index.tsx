import Link from 'next/link';
import { VFC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Lesson Notion Blog</h1>
        <Link href='/'>HOME</Link>
        <Link href='/about'>ABOUT</Link>
        <Link href='/blogs'>BLOGS</Link>
      </header>
      <main>{children}</main>
      <footer>©progLearning</footer>
    </div>
  );
};
