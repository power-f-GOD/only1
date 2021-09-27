// Add/Update SVG icons (from the design/Figma) here

import { FC, SVGProps, DetailedHTMLProps, memo } from 'react';

import { SVG } from './';
import { SVGShapeName } from 'src/types';

const _SVGShape: FC<
  { name: SVGShapeName } & DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = ({ name, ...props }): JSX.Element => {
  switch (name) {
    case '':
      return <SVG {...props}></SVG>;
    default:
      return <></>;
  }
};

export const SVGShape = memo(_SVGShape);
