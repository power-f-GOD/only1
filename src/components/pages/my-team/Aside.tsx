import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/my-team/index.module.scss';
import { Card } from 'src/components';

const Aside = (): JSX.Element => {
  return (
    <Container
      as="aside"
      className={`${S.Aside} anim__fadeInLeftBig anim__dur--05s custom-scroll-bar`}>
      <Card></Card>
    </Container>
  );
};

export default Aside;
