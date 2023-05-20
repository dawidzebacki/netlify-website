import type { GetStaticProps, NextPage } from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

type Props = {
  content: { attributes: HomeAttributes };
};
type HomeAttributes = {
  hero_title: string;
  hero_description: string;
  hero_image: string;
};
const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
  return (
    <Main meta={<Meta title="HomePage" description="HomePage description" />}>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <img
        src={`/${attributes.hero_image}`}
        alt="hero"
        style={{ width: '200px' }}
      />
    </Main>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
};
export default HomePage;
