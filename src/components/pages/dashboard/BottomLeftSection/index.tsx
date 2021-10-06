import S from 'src/styles/pages/dashboard/index.module.scss';
import { Card, ChartFilter } from '../shared';
import { Box } from 'src/components';
import AreaChart from './AreaChart';

const BottomLeftSection = (): JSX.Element => {
  return (
    <Card
      as="section"
      title="Team Activities"
      options={[{ value: 'lorem' }, { value: 'ipsum' }, { value: 'dolor' }]}
      className={`${S.BottomLeftSection}`}
      header={
        <Box className={`${S.keyFilterWrapper} d-flex align-items-center ms-auto`}>
          <ChartFilter />
        </Box>
      }>
      <AreaChart />
    </Card>
  );
};

export default BottomLeftSection;
