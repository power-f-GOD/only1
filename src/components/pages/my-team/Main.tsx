import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/my-team/index.module.scss';
import { Box, Avatar, LazyBox, Card } from 'src/components';
import { GetImage } from 'src/utils';

const Main = (): JSX.Element => {
  return (
    <Container as="main" className={`${S.Main}`}>
      {Array(25)
        .fill('')
        .map((_, i) => (
          <Card
            component={LazyBox}
            key={i}
            className="Card anim__fadeInUp"
            style={{ animationDelay: `${i * 0.1}s` }}
            options={[{ value: 'lorem' }, { value: 'ipsum' }, { value: 'dolor' }]}>
            {/* <Box className="mb-2 w-100"/> */}

            <Avatar
              size="medium"
              variant="square"
              className="mt-2"
              src={GetImage.misc((i || 0) % 2 === 0 ? 'lady' : 'guy')}
            />

            <Box as="p">
              <Box as="strong">Team Member</Box>
              <br />
              <Box as="small">member@example.com</Box>
            </Box>

            <Box as="em">JOB DESCRIPTION</Box>
          </Card>
        ))}
    </Container>
  );
};

export default Main;
