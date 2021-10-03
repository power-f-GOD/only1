import { useCallback, memo } from 'react';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Card, ChartFilter } from '../shared';
import { Box, SVGIcon, ButtonMenu } from 'src/components';
import BarChart from './BarChart';

const chartKeys = ['Received', 'Completed'];

const TopRightSection = (): JSX.Element => {
  return (
    <Card as="section" className={`${S.TopRightSection}`}>
      <Box className="d-flex align-items-center m-0">
        <Box as="h2" className="h6">
          Task Activities
        </Box>
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

        <ButtonMenu
          buttonType="icon-button"
          buttonClassName="more-button"
          buttonConstantContent={<SVGIcon name="more" fontSize="inherit" />}
          options={[{ value: 'lorem' }, { value: 'ipsum' }, { value: 'dolor' }]}
        />
      </Box>

      <BarChart />
    </Card>
  );
};

export default memo(TopRightSection);
