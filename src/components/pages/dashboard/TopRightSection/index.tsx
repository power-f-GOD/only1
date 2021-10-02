import { useCallback, memo } from 'react';

import IconButton from '@mui/material/IconButton';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Card, ChartFilter } from '../shared';
import { Box, SVGIcon } from 'src/components';
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
        <IconButton className={S.moreButton}>
          <SVGIcon name="more" />
        </IconButton>
      </Box>

      <BarChart />
    </Card>
  );
};

export default memo(TopRightSection);
