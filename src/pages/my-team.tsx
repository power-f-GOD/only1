import { NextPage } from 'next';

import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/my-team/index.module.scss';
import { AppHead } from 'src/components';
import { Header, Main, Aside } from 'src/components/pages/my-team';

const MyTeam: NextPage = () => {
  return (
    <>
      <AppHead title="My Team" />

      <Container as="main" fluid className={S.MyTeam}>
        <Header />
        <Main />
        <Aside />
      </Container>
    </>
  );
};

export default MyTeam;
