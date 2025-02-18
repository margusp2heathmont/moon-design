import { ColorNames } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

interface PopoverContainerProps {
  padding?: number;
  backgroundColor?: ColorNames;
  minWidth?: number;
  maxWidth?: number;
}

export const PopoverContainer = styled.div<PopoverContainerProps>(
  ({
    theme: { colorNew, newTokens },
    padding,
    backgroundColor,
    theme,
    minWidth,
    maxWidth,
  }) => ({
    maxWidth: rem(maxWidth),
    minWidth: rem(minWidth),
    padding: `${padding !== undefined ? rem(padding) : rem(24)}`,
    background: `${
      backgroundColor !== undefined
        ? themed('color', backgroundColor)(theme)
        : themed('color', 'gohan.100')(theme)
    }`,
    outline: 'none',
    borderRadius: newTokens.borderRadius.surface.small,
    color: colorNew.bulma,
    boxShadow: newTokens.boxShadow.large,
  })
);
