import Link from 'next/link';
import { VFC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen relative'>
      <header className='text-center py-4 border-b'>
        <h1 className='text-2xl font-bold'>Lesson Notion Blog</h1>
        <div className='flex justify-center items-center gap-4 mt-4'>
          <Link href='/'>
            <a className='hover:text-orange-400'>HOME</a>
          </Link>
          <Link href='/about'>
            <a className='hover:text-orange-400'>ABOUT</a>
          </Link>
          <Link href='/blogs'>
            <a className='hover:text-orange-400'>BLOGS</a>
          </Link>
        </div>
      </header>
      <main className='px-8 py-6'>{children}</main>
      <footer className='text-center bg-black text-white py-2 absolute bottom-0 w-screen'>
        © progLearning
      </footer>
    </div>
  );
};
