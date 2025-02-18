import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import BigContent from '../../public/examples/modalTW/BigContent';
import Default from '../../public/examples/modalTW/Default';
import StyledContent from '../../public/examples/modalTW/StyledContent';
import WithSelect from '../../public/examples/modalTW/WithSelect';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('modalTW');
  return (
    <>
      <ComponentPageDescription title="Modal" isInProgress>
        <p>
          A modal is an interface element that appears over other content. It
          requires an interaction from the user before they can return to
          whatever is underneath.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Exemple with big content"
        preview={<BigContent />}
        code={examples ? examples.BigContent : 'Loading'}
      />
      <Preview
        title="Exemple with styled content"
        preview={<StyledContent />}
        code={examples ? examples.StyledContent : 'Loading'}
      />

      <Preview
        title="Exemple with Select"
        preview={<WithSelect />}
        code={examples ? examples.WithSelect : 'Loading'}
      />

      <PropsTable
        title="Modal"
        data={[
          {
            name: 'open',
            type: 'boolean',
            required: true,
            default: '-',
            description: 'Whether the Modal is open or not.',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: true,
            default: '-',
            description: 'Called when the Modal is dismissed.',
          },
        ]}
      />

      <PropsTable
        title="Modal.Panel"
        data={[
          {
            name: 'className',
            type: 'string',
            required: true,
            default: '-',
            description: 'Tailwind classes for customization of Panel.',
          },
        ]}
      />

      <PropsTable
        title="Modal.Backdrop"
        data={[
          {
            name: 'className',
            type: 'string',
            required: true,
            default: '-',
            description: 'Tailwind classes for customization of Backdrop.',
          },
        ]}
      />
    </>
  );
};

export default Example;
