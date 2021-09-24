import { useState, useCallback, useContext, useEffect, memo, AnimationEvent } from 'react';

import { AppWindowContext } from 'src/pages/_app';
import { Box } from '.';
import { NavLink, Button, SVGIcon, Avatar } from './shared';
import { SVGIconName } from 'src/types';

const actions = ['search', 'notification'];

const AppHeader = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isPC = windowWidth > 991 && typeof window !== 'undefined';
  const [open, setOpen] = useState(false);
  const [renderNav, setRenderNav] = useState(isPC);

  useEffect(() => {
    if (!isPC) {
      document.body.dataset.nav_open = String(open);
    } else {
      document.body.dataset.nav_open = 'false';
    }
  }, [open, isPC]);

  return (
    <Box as="header" className={`AppHeader custom-scroll-bar`}>
      <Box as="h1" className="h4 my-0">
        Dashboard
      </Box>

      <Box as="ul" className={`AppHeader__actions-container`}>
        {actions.map((route) => {
          const [name] = route.split('|');

          return (
            <Box as="li" className="mx-lg-2" key={name}>
              <Button _type="icon-button">
                <SVGIcon name={name as SVGIconName} />
              </Button>
            </Box>
          );
        })}

        <Box as="li" className="ms-lg-2 d-flex align-items-center">
          <Avatar src={''} noFrame size="small" alt="avatar" />
          <SVGIcon fontSize="0.125em" name="caret-down" className="ms-2" />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(AppHeader);
