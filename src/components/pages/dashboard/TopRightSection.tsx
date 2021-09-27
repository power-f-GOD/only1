/* eslint-disable @typescript-eslint/no-non-null-assertion */
import IconButton from '@material-ui/core/IconButton';

import S from 'src/styles/pages/dashboard/index.module.scss';
import Card from './Card';
import ChartFilter from './ChartFilter';
import { Box, SVGIcon } from 'src/components';
// import { useCallback, useState } from 'react';

const chartKeys = ['Received', 'Completed'];

const TopRightSection = (): JSX.Element => {
  return (
    <Card as="section" className={`${S.TopRightSection}`}>
      <Box className="d-flex align-items-center m-0">
        <Box as="h2" className="h6">
          Task Activities
        </Box>
        <Box className={`${S.keyFilterWrapper} d-flex align-items-center ms-auto`}>
          {chartKeys.map((key) => (
            <Box as="span" className={`${S.blueKey} pe-3 pe-lg-4 key`} key={key}>
              <Box as="span" className={`${S.box} ${S[key.toLowerCase()]} me-2`} />
              {key}
            </Box>
          ))}

          <ChartFilter />
        </Box>
        <IconButton className={S.moreButton}>
          <SVGIcon name="more" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default TopRightSection;
