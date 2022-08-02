import { ColorProps } from '../../../../../../../packages/icons/node_modules/@heathmont/moon-themes/lib';

export type Props = {
  onChange: (key: string, isActive: boolean) => void;
  activeOptions: string[];
  formatFn: (props: { value: string | number; key: string }) => any;
  options: {
    label: any;
    dataKey: string;
    value: string | number;
    color: ColorProps;
  }[];
};

export type ColorPreviewProps = {
  color: string;
  theme?: any;
};

export type ButtonProps = {
  isActive?: boolean;
  onClick: (v: string) => void;
};
