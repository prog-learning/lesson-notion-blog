import { VFC } from 'react';

type Props = {};

export const HomePage: VFC<Props> = () => {
  return (
    <div className='text-center'>
      <h2>HOME</h2>
      <p>最新の記事を3つ表示したい</p>
    </div>
  );
};
