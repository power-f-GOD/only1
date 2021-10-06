import { useCallback, memo } from 'react';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Card, ChartFilter } from '../shared';
import { Box } from 'src/components';
import BarChart from './BarChart';

const chartKeys = ['Received', 'Completed'];

const TopRightSection = (): JSX.Element => {
  return (
    <Card
      as="section"
      title="Task Activities"
      className={`${S.TopRightSection}`}
      options={[{ value: 'lorem' }, { value: 'ipsum' }, { value: 'dolor' }]}
      header={
        <Box className={`${S.keyFilterWrapper} d-flex align-items-center ms-auto`}>
          {chartKeys.map(
            useCallback(
              (key) => (
                <Box as="span" className={`${S.blueKey} pe-3 pe-lg-4 key`} key={key}>
                  <Box as="span" className={`${S.box} ${S[key.toLowerCase()]} me-2`} />
                  {key}
                </Box>
              ),
              []
            )
          )}

          <ChartFilter />
        </Box>
      }>
      <BarChart />
    </Card>
  );
};

export default memo(TopRightSection);
