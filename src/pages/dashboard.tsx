/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';

import { Container } from 'react-bootstrap';

import { AppHead } from 'src/components';
import { Header, Main, Aside } from 'src/components/pages/dashboard';

const Dashboard: NextPage = () => {
  return (
    <>
      <AppHead title="Dashboard" />

      <Container as="main" fluid className="Dashboard">
        <Header />
        <Main />
        <Aside />
      </Container>
    </>
  );
};

export default Dashboard;
