import { FC } from 'react';

type ButtonProps = {
  className?: string;
  color: 'red' | 'blue' | 'green';
};

export const Button: FC<ButtonProps> = ({ color, children, className }) => {
  const classStr = {
    red: 'text-red-300',
    blue: 'text-blue-300',
    green: 'text-green-300',
  }[color];

  return (
    <button className={`${classStr} ${className} border rounded p-4`}>
      {children}
    </button>
  );
};
