import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Caption from '../../public/examples/typographyTW/Caption';
import Colors from '../../public/examples/typographyTW/Colors';
import Heading from '../../public/examples/typographyTW/Heading';
import Text from '../../public/examples/typographyTW/Text';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('typographyTW');
  return (
    <>
      <ComponentPageDescription title="Typography" isInProgress>
        <p>Typography includes text, headings, and captions.</p>
      </ComponentPageDescription>
      <Preview
        title="Text"
        preview={<Text />}
        code={examples ? examples.Text : 'Loading'}
      />
      <Preview
        title="Heading"
        preview={<Heading />}
        code={examples ? examples.Heading : 'Loading'}
      />
      <Preview
        title="Caption"
        preview={<Caption />}
        code={examples ? examples.Caption : 'Loading'}
      />
      <Preview
        title="Custom Colours"
        preview={<Colors />}
        code={examples ? examples.Colors : 'Loading'}
      />
    </>
  );
};

export default Example;
