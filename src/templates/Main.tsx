import type { ReactNode } from 'react';

// import { AppConfig } from "@/utils/AppConfig";
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Wrapper } from '@/components/Wrapper';

import styles from './styles.module.scss';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className={styles['main-wrapper']}>
    {props.meta}

    <Navbar />

    <main className={styles.main}>
      <Wrapper classNames={styles.wrapper}>{props.children}</Wrapper>
    </main>

    <Footer />
  </div>
);

export { Main };
