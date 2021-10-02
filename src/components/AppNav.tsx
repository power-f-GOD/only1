import { useState, useCallback, useContext, useEffect, memo, AnimationEvent } from 'react';

import { AppWindowContext } from 'src/pages/_app';
import { Box, Logo, Anchor } from '.';
import { NavLink, SVGIcon } from './shared';
import { SVGIconName } from 'src/types';

const routes = [
  'Dashboard|/|home',
  'My Team|/my-team|people',
  'Task|/task|briefcase',
  'Calendar|/calendar|calendar',
  'Report|/report|graph',
  'Settings|/settings|settings'
];

const AppNav = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isPC = windowWidth > 991 && typeof window !== 'undefined';
  const [open, setOpen] = useState(false);
  const [renderNav, setRenderNav] = useState(isPC);

  const handleNavLinkClick = useCallback(
    (e) => {
      if (!isPC) {
        return setOpen((prev) => !prev);
      }

      e.currentTarget.blur();
    },
    [isPC]
  );

  const handleNavAnimationEnd = useCallback(
    (e: AnimationEvent<HTMLUListElement>) => {
      const self = e.target as HTMLElement;

      // prevent event bubbling
      if (!/nav-links-container/.test(self.className)) {
        return;
      }

      setRenderNav(isPC ? true : open);
    },
    [isPC, open]
  );

  useEffect(() => {
    if (!isPC) {
      document.body.dataset.nav_open = String(open);
    } else {
      document.body.dataset.nav_open = 'false';
    }
  }, [open, isPC]);

  return (
    <Box as="nav" className={`AppNav custom-scroll-bar`}>
      <Logo />

      {!isPC && (renderNav || open) && (
        <Box
          className={`AppNav__underlay d-lg-none anim__dur--05s ${
            !open ? 'anim__OutRightBig' : 'anim__InRightBig'
          }`}
        />
      )}

      <Box as="ul" className={`AppNav__nav-links-container`} onAnimationEnd={handleNavAnimationEnd}>
        {routes.map(
          useCallback(
            (route) => {
              const [name, url, iconName] = route.split('|');

              return (
                <Box as="li" className="" key={url}>
                  <NavLink
                    button
                    exact
                    href={url}
                    color="tertiary"
                    className="AppNav__nav-link"
                    onClick={!isPC ? handleNavLinkClick : undefined}>
                    <SVGIcon name={iconName as SVGIconName} className="me-3" /> {name}
                  </NavLink>
                </Box>
              );
            },
            [isPC, handleNavLinkClick]
          )
        )}
      </Box>

      <Box className="mt-auto">
        <Anchor
          button
          color="primary"
          variant="contained"
          className="AppNav__logout-btn"
          href="/login">
          <SVGIcon name="logout" className="me-3" />
          Logout
        </Anchor>
      </Box>
    </Box>
  );
};

export default memo(AppNav);
