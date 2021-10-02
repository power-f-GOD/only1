import { useCallback, memo } from 'react';

import { Container } from 'react-bootstrap';

import IconButton from '@mui/material/IconButton';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Card } from '../shared';
import { SVGIcon, Box, ProgressPie } from 'src/components/shared';
import { pieChartData } from '../data';
import { SubPaletteColor } from 'src/types';

const TopLeftSection = (): JSX.Element => {
  return (
    <Container as="section" className={`${S.TopLeftSection}`}>
      {pieChartData.map(
        useCallback(({ title, count, countText, percentage }, i) => {
          let pieColor: SubPaletteColor;

          switch (true) {
            case i === 0:
              pieColor = 'warning';
              break;
            case i === 1:
              pieColor = 'error';
              break;
            case i === 2:
              pieColor = 'secondary';
              break;
            default:
              pieColor = 'primary';
          }

          return (
            <Card key={pieColor}>
              <Box className="d-flex justify-content-between align-items-center m-0" key={i}>
                <Box as="h2" className="h6">
                  {title}
                </Box>
                <IconButton className={S.moreButton}>
                  <SVGIcon name="more" />
                </IconButton>
              </Box>
              <Box className="d-flex justify-content-between align-items-center mt-3">
                <ProgressPie value={percentage} color={pieColor} type="A" />

                <Box as="p" className="d-flex flex-column flex-fill text-end align-items-end m-0">
                  <Box as="strong" className="">
                    {count}
                  </Box>
                  <Box as="small" className="theme-tertiary-dark">
                    {countText}
                  </Box>
                </Box>
              </Box>
            </Card>
          );
        }, [])
      )}
    </Container>
  );
};

export default memo(TopLeftSection);
