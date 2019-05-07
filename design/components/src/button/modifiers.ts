import { CSSObject } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { buttonActive, buttonHover } from './states';
import { spacing } from '@heathmont/sportsbet-utils';

type ButtonModifiers = 'primary' | 'highlight' | 'secondary' | 'optional';

/**
 * buttonModifiers
 *
 * Styles that extend `buttonBase` to change the button's cosmetic appearance.
 * Accessed via `buttonModifiers[key]`.
 *
 * For usage guidelines, see the README.
 */
const primary: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.brand,
  ...buttonHover({
    backgroundColor: colors.alternate.brand[10],
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.brand[20],
  }),
};

const highlight = {
  color: colors.neutral[10],
  backgroundColor: colors.highlight,
  ...buttonHover({
    backgroundColor: colors.alternate.highlight[10],
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.highlight[20],
  }),
};

const secondary: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.neutral[70],
  ...buttonHover({
    backgroundColor: colors.neutral[80],
  }),
  ...buttonActive({
    backgroundColor: colors.neutral[80],
  }),
};

const optional: CSSObject = {
  color: colors.neutral[70],
  backgroundColor: colors.neutral[90],
  border: 'none',
  ...buttonHover({
    backgroundColor: colors.neutral[100],
  }),
  ...buttonActive({
    backgroundColor: colors.neutral[100],
  }),
};

/**
 * buttonShadow
 *
 * Removes user-agent `:focus` styles and generates a box-shadow using the
 * color provided.
 */
export const buttonShadow: (color: string) => CSSObject = color => ({
  outline: 'none',
  boxShadow: `0 0 ${spacing('default', 'px')} ${color}`,
});

const buttonModifiers = {
  primary,
  highlight,
  secondary,
  optional,
};

export { buttonModifiers, ButtonModifiers };
