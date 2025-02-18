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
      d="M19.5 11a.5.5 0 00-1 0h1zm-1 .737a.5.5 0 101 0h-1zm2.474 1.473a.5.5 0 10-1 0h1zm-1 .737a.5.5 0 001 0h-1zm-.474 1.474a.5.5 0 00-1 0h1zm-1 .737a.5.5 0 101 0h-1zm2.474 1.474a.5.5 0 10-1 0h1zm-1 .736a.5.5 0 101 0h-1zm-.474 1.474a.5.5 0 00-1 0h1zm-1 .737a.5.5 0 101 0h-1zm2.474 1.474a.5.5 0 10-1 0h1zm-1 .736a.5.5 0 001 0h-1zm-.474 1.474a.5.5 0 10-1 0h1zm-1 .737a.5.5 0 101 0h-1zM6.5 9.5H7h-.5zm0 13H6h.5zm16 3V25v.5zm-13 0v.5-.5zm16-12.346H25h.5zm0 9.346h.5-.5zm-3-12.346v.5-.5zm-5.77 0l-.428.257.146.243h.283v-.5zM14.54 6.5l.428-.257L14.821 6h-.282v.5zM9.5 6.5V6v.5zm9 4.5v.737h1V11h-1zm1.474 2.21v.737h1v-.737h-1zM18.5 15.421v.737h1v-.737h-1zm1.474 2.21v.737h1v-.736h-1zM18.5 19.843v.737h1v-.737h-1zm1.474 2.21v.738h1v-.737h-1zM18.5 24.264V25h1v-.737h-1zM6 9.5v13h1v-13H6zM22.5 25h-13v1h13v-1zM25 13.154V22.5h1v-9.346h-1zm-2.5-3.5h-5.77v1h5.77v-1zm-5.34.243l-2.193-3.654-.857.514 2.192 3.654.858-.514zM14.539 6H9.5v1h5.039V6zM26 13.154a3.5 3.5 0 00-3.5-3.5v1a2.5 2.5 0 012.5 2.5h1zM7 9.5A2.5 2.5 0 019.5 7V6A3.5 3.5 0 006 9.5h1zm-1 13A3.5 3.5 0 009.5 26v-1A2.5 2.5 0 017 22.5H6zM22.5 26a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesFolderZip =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
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
export default FilesFolderZip;
