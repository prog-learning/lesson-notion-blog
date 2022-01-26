import { VFC } from 'react';
import Content from './contents.mdx';
import { MDXProvider } from '@mdx-js/react';

type Props = {};

const components = {
  h1: (props: any) => <h1 className='text-3xl' {...props} />,
  h2: (props: any) => <h2 className='text-xl font-bold' {...props} />,
  h3: (props: any) => <h3 className='text-lg font-bold' {...props} />,
  ul: (props: any) => <ul className=' list-disc pl-8' {...props} />,
};

export const AboutPage: VFC<Props> = () => {
  return (
    <div className='space-y-4'>
      <MDXProvider components={components}>
        <Content />
      </MDXProvider>
    </div>
  );
};
