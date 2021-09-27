/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';

import { Container } from 'react-bootstrap';

import S from '../styles/pages/dashboard/index.module.scss';
import { AppHead } from 'src/components';
import {
  TopLeftSection,
  TopRightSection,
  BottomLeftSection,
  BottomRightSection
} from 'src/components/pages/dashboard';

const Dashboard: NextPage = () => {
  return (
    <>
      <AppHead title="Dashboard" />

      <Container as="main" fluid className={`${S.Dashboard}`}>
        <TopLeftSection />
        <TopRightSection />
        <BottomLeftSection />
        <BottomRightSection />
      </Container>
    </>
  );
};

export default Dashboard;
