import { useMemo } from 'react';

import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/my-team/index.module.scss';
import { Box, ButtonMenu, SVGIcon } from 'src/components';
import { MuiButtonProps } from 'src/types';

const Header = (): JSX.Element => {
  return (
    <Container as="header" className={`${S.Header} d-flex align-items-center`}>
      <Box as="h2" className="h6 my-0">
        Team Members
      </Box>
      <Box className="ms-auto d-flex align-items-center">
        <Box as="small" className="me-3 theme-tertiary-500">
          Sort by:
        </Box>
        <ButtonMenu
          buttonClassName="px-2"
          buttonProps={useMemo<MuiButtonProps>(
            () => ({
              size: 'small',
              endIcon: <SVGIcon name="caret-down" fontSize="inherit" />
            }),
            []
          )}
          options={useMemo(() => [{ value: 'lorem' }, { value: 'ipsum' }, { value: 'dolor' }], [])}
        />
      </Box>
    </Container>
  );
};

export default Header;
