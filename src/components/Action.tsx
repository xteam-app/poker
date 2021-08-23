import { FC } from 'react';

interface Props {
  onClick?(props?: any): void;
}

export const Action: FC<Props> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);
