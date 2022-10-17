import type SwitchSizes from '../types/SwitchSizes';

const getSwitchSpanSize = (size?: SwitchSizes) => {
  switch (size) {
    case '2xs':
      return 'w-3 h-3';
    case 'xs':
      return 'w-4 h-4';
    case 'sm':
    default:
      return 'w-6 h-6';
  }
};

export default getSwitchSpanSize;
