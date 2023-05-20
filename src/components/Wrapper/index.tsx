import type { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type WrapperProps = {
  children: ReactNode;
  classNames?: string;
};

export const Wrapper: FC<WrapperProps> = ({ children, classNames }) => {
  return (
    <div
      className={`${
        classNames
          ? `${styles['content-wrapper']} ${classNames}`
          : `${styles['content-wrapper']}`
      }`}
    >
      {children}
    </div>
  );
};
