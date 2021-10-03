import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/my-team/index.module.scss';
import { Card, SVGIcon, Box } from 'src/components';

const Aside = (): JSX.Element => {
  return (
    <Container
      as="aside"
      className={`${S.Aside} anim__fadeInLeftBig anim__dur--05s custom-scroll-bar`}>
      <Card className="p-0">
        <Box
          as="section"
          className={`${S.nxtuiAdvert} d-flex flex-column align-items-center justify-content-center p-5`}>
          <SVGIcon name="nxtui-logo" fontSize="3.375em" />
          <Box as="strong" className="fw-normal">
            Nxt_UXUI
          </Box>
          <Box as="span">A designer team</Box>
          <Box as="small">nxt.uxui@gmail.com</Box>
        </Box>

        <Box
          as="section"
          className={`${S.projectActivitySection} d-flex justify-content-between align-items-center p-4`}>
          <SVGIcon name="caret-left" fontSize="0.75em" />
          <Box className={`${S.projectActivityPie} my-4`}>
            <Box className={S.innerCircle}></Box>
          </Box>
          <SVGIcon name="caret-right" fontSize="0.75em" />
        </Box>
      </Card>
    </Container>
  );
};

export default Aside;
