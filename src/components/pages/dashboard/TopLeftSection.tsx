/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback } from 'react';

import { Container } from 'react-bootstrap';

import IconButton from '@material-ui/core/IconButton';

import S from 'src/styles/pages/dashboard/index.module.scss';
import Card from './Card';
import { SVGIcon, Box } from 'src/components/shared';

const data = [
  {
    title: 'Works',
    count: 75,
    countText: 'Works Today',
    percentage: 50
  },
  {
    title: 'Analytics',
    count: 310,
    countText: 'Analytics',
    percentage: 30
  },
  {
    title: 'Statistics',
    count: 75,
    countText: 'Works Today',
    percentage: 59
  },
  {
    title: 'Tasks',
    count: 15,
    countText: 'Tasks Today',
    percentage: 75
  }
];

const TopLeftSection = (): JSX.Element => {
  return (
    <Container as="section" className={`${S.TopLeftSection}`}>
      {data.map(
        useCallback(
          ({ title, count, countText }, i) => (
            <Card>
              <Box className="d-flex justify-content-between align-items-center m-0" key={i}>
                <Box as="h2" className="h6">
                  {title}
                </Box>
                <IconButton className={S.moreButton}>
                  <SVGIcon name="more" />
                </IconButton>
              </Box>
              <Box className="d-flex justify-content-between mt-4">
                <Box></Box>
                <Box
                  as="p"
                  className="d-flex flex-column align-items-end m-0
                ">
                  <Box as="strong" className="">
                    {count}
                  </Box>
                  <Box as="small" className="theme-tertiary-dark">
                    {countText}
                  </Box>
                </Box>
              </Box>
            </Card>
          ),
          []
        )
      )}
    </Container>
  );
};

export default TopLeftSection;
