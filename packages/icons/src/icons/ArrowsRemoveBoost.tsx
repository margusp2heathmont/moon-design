import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.966 9.138a.5.5 0 00-.806-.592l.806.592zm-4.602 5.426l.403.296-.403-.296zm-1.71.366l-.247.435.246-.435zm-4.26-2.415l.247-.435a.5.5 0 00-.648.137l.401.298zm-7.257 8.93a.5.5 0 00.802.596l-.802-.596zm5.66.631a.5.5 0 10-.139-.99l.14.99zm-5.802.308l-.493.088a.5.5 0 00.562.407l-.07-.495zm-.485-5.575a.5.5 0 00-.985.175l.985-.175zm17.65-8.263l-4.2 5.722.807.591 4.2-5.721-.807-.592zm-5.26 5.949l-4.259-2.415-.493.87 4.259 2.415.493-.87zm-4.907-2.278l-6.856 9.228.802.596 6.857-9.228-.803-.596zm5.968 2.05a.82.82 0 01-1.061.228l-.493.87a1.82 1.82 0 002.36-.505l-.806-.592zm-7.302 6.819l-5.734.803.139.99 5.733-.803-.139-.99zm-5.172 1.21L7.51 16.81l-.985.175.977 5.488.985-.176z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ArrowsRemoveBoost =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default ArrowsRemoveBoost;