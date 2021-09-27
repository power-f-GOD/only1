/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';

import { Container } from 'react-bootstrap';

import { AppHead } from 'src/components';
import { Header, Main, Aside } from 'src/components/pages/my-team';

const MyTeam: NextPage = () => {
  return (
    <>
      <AppHead title="My Team" />

      <Container as="main" fluid className="MyTeam">
        <Header />
        <Main />
        <Aside />
      </Container>
    </>
  );
};

export default MyTeam;
