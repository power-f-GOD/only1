import { useState, useCallback, useContext, useEffect, memo } from 'react';
import { useRouter } from 'next/router';

import IconButton from '@mui/material/IconButton';

import { AppWindowContext } from 'src/pages/_app';
import { Box } from '.';
import { SVGIcon, Avatar } from './shared';
import { SVGIconName } from 'src/types';
import { GetImage, delay, createIntersectionObserver } from 'src/utils';

const actions = ['search', 'notification'];
let observer: IntersectionObserver;

const AppHeader = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isPC = windowWidth > 991 && typeof window !== 'undefined';
  const [open] = useState(false);
  const { pathname } = useRouter();
  // const [renderNav, setRenderNav] = useState(isPC);

  useEffect(() => {
    delay(500, () => {
      const page: Element = document.querySelector('#__next > main')!;
      let observed: Element;

      if (page && pathname) {
        observer = createIntersectionObserver(
          null,
          (entries) => {
            entries.forEach((entry) => {
              const { isIntersecting } = entry;

              document.body.dataset.scrolled = '' + !isIntersecting;
            });
          },
          { threshold: [0, 1] }
        );

        observed = page?.children[0];

        if (observed) {
          observer.observe(observed);
        }
      }
    });
  }, [pathname]);

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
        {actions.map(
          useCallback((route) => {
            const [name] = route.split('|');

            return (
              <Box as="li" className="mx-lg-2" key={name}>
                <IconButton>
                  <SVGIcon name={name as SVGIconName} />
                </IconButton>
              </Box>
            );
          }, [])
        )}

        <Box as="li" className="ms-3 d-flex align-items-center">
          <Avatar src={GetImage.misc('avatar')} noFrame size="small" alt="avatar" />
          <SVGIcon fontSize="0.75em" name="caret-down" className="ms-3" />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(AppHeader);
