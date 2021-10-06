import { memo, useContext } from 'react';

import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { DashboardContext } from 'src/pages/dashboard';
import PieCard from './PieCard';

const TopLeftSection = (): JSX.Element => {
  const { works, analytics, statistics, tasks } = useContext(DashboardContext);

  return (
    <Container as="section" className={`${S.TopLeftSection}`}>
      <PieCard {...works} color="warning" />
      <PieCard {...analytics} color="error" />
      <PieCard {...statistics} color="secondary" />
      <PieCard {...tasks} color="primary" />
    </Container>
  );
};

export default memo(TopLeftSection);
