import { useState, VFC } from 'react';
import { Button } from './Button';

type Props = {};

export const HomePage: VFC<Props> = () => {
  const [classStr, setClassStr] = useState('text-red-400');
  return (
    <div className='text-center'>
      <h2>HOME</h2>
      <p>最新の記事を3つ表示したい</p>
      <input
        type='text'
        className='border'
        value={classStr}
        onChange={(e) => setClassStr(e.target.value)}
      />
      <div>
        <p className={classStr}>これはクラスで指定した文字列です</p>
      </div>
      <Button color='red'>red</Button>
      <Button color='blue'>blue</Button>
      <Button color='green'>green</Button>
    </div>
  );
};
