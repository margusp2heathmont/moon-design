import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Buttons from '../../public/examples/switch/Buttons';
import Default from '../../public/examples/switch/Default';
import Disabled from '../../public/examples/switch/Disabled';
import Rtl from '../../public/examples/switch/Rtl';
import Sizes from '../../public/examples/switch/Sizes';
import Theme from '../../public/examples/switch/Theme';
import useExamples from '../../utils/useExamples';

type Props = {
  isRtl?: boolean;
};

export default function PageSwitch({ isRtl }: Props) {
  const examples = useExamples('switch');
  return (
    <>
      <ComponentPageDescription title="Switch">
        <DeprecationWarning href="/core/switch" name="Switch" />
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Dark &amp; Light mode"
        preview={<Theme />}
        code={examples ? examples.Theme : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Buttons"
        preview={<Buttons />}
        code={examples ? examples.Buttons : 'Loading'}
      />
      <Preview
        title="Right to left"
        preview={<Rtl />}
        code={examples ? examples.Rtl : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: `Unique element's identifier`,
          },
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description: `Is switch checked/unchecked`,
          },
          {
            name: 'onChange',
            type: 'React.ChangeEvent',
            required: false,
            default: '-',
            description: `Event that happens when you click on the switch`,
          },
          {
            name: 'captionUnchecked',
            type: 'string',
            required: false,
            default: '-',
            description: `Displayed text when unchecked`,
          },
          {
            name: 'captionChecked',
            type: 'string',
            required: false,
            default: '-',
            description: `Displayed text when checked`,
          },
          {
            name: 'isRtl',
            type: 'boolean',
            required: false,
            default: 'false',
            description: `-`,
          },
        ]}
      />
    </>
  );
}
