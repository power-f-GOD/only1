import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/my-team/index.module.scss';
import { Box, SVGIcon, Avatar, LazyBox, ButtonMenu } from 'src/components';
import { GetImage } from 'src/utils';

const Main = (): JSX.Element => {
  return (
    <Container as="main" className={`${S.Main}`}>
      {Array(60)
        .fill('')
        .map((_, i) => (
          <LazyBox key={i} noFade className="Card">
            <Box className="mb-2 w-100">
              <ButtonMenu
                buttonType="icon-button"
                buttonClassName="more-button ms-auto"
                buttonConstantContent={<SVGIcon name="more" fontSize="inherit" />}
                options={[{ value: 'lorem' }, { value: 'ipsum' }, { value: 'dolor' }]}
              />
            </Box>

            <Avatar
              size="medium"
              variant="square"
              src={GetImage.misc((i || 0) % 2 === 0 ? 'lady' : 'guy')}
            />

            <Box as="p">
              <Box as="strong">Team Member</Box>
              <br />
              <Box as="small">member@example.com</Box>
            </Box>

            <Box as="em">JOB DESCRIPTION</Box>
          </LazyBox>
        ))}
    </Container>
  );
};

export default Main;
