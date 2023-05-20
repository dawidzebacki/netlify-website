import Link from 'next/link';
import { useRouter } from 'next/router';

import { Wrapper } from '../Wrapper';
import styles from './styles.module.scss';

export const Navbar = () => {
  const router = useRouter();
  const base = router.basePath;
  const path = router.pathname;

  return (
    <header className={styles.header}>
      <Wrapper classNames={styles.wrapper}>
        <Link href="/">
          <img
            src={`${base}/branddevs.svg`}
            className={styles['header-logo']}
          />
        </Link>
        <nav className={styles.navbar}>
          <ul className={styles['navbar-list']}>
            <Link
              className={`${
                path === '/home'
                  ? `${styles['navbar-list-item']} ${styles['navbar-list-item--active']}`
                  : `${styles['navbar-list-item']}`
              }
               `}
              href="/home"
            >
              HOME
            </Link>

            <Link
              className={`${
                path === '/blog'
                  ? `${styles['navbar-list-item']} ${styles['navbar-list-item--active']}`
                  : `${styles['navbar-list-item']}`
              }
               `}
              href="/blog"
            >
              BLOG
            </Link>
            <Link
              className={`${
                path === '/about'
                  ? `${styles['navbar-list-item']} ${styles['navbar-list-item--active']}`
                  : `${styles['navbar-list-item']}`
              }
               `}
              href="/about"
            >
              ABOUT
            </Link>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};
