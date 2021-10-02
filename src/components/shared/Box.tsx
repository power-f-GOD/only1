/* eslint-disable react/display-name */
/*
  This file defines bare components without default Bootstrap styles that affect React-Bootstraps (grid) components like <Container>, <Row> and <Col> which change their layout behaviours which may not always be desirable.

  The hallmark of this file is the <Box> component, and the idea is to, as much as possible, stick to using components throughout app and not HTML tags for the sake of consistency and standardization: We're writing React not (just) HTML. Copy? :)

  Also, FWIW, the idea of the Box component (and the other components here) is similar to the idea of Material-UI's Box.
  I chose to not add Material-UI to this project as it would increase the size of the whole bundle, so I'm trying as much as possible to keep this project lean and so it doesn't have too many deps (dependencies)!
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect, memo, createElement } from 'react';
import { BoxProps } from 'src/types';

const _Box: FC<BoxProps> = ({ as, children, component, dynamic, ...props }): JSX.Element => {
  const Component = component;
  const [rendered, setRendered] = useState(!dynamic);

  useEffect(() => {
    setRendered(true);
  }, []);

  if (props._ref) {
    props.ref = props._ref;
    delete props._ref;
  }

  //Fix for SSR error: 'Warning: Expected server HTML to contain a matching <div> in <nav>'

  if (dynamic && !rendered) return <></>;

  if (Component) {
    return <Component {...props}>{children}</Component>;
  }

  return createElement(as || 'div', props, children);
};

export const Box = memo(_Box);
