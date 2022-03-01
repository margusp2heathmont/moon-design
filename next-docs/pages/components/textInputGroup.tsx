import React from 'react';
import Preview from '../../components/codePreview/Preview';
import AccessValues from '../../public/examples/textInputGroup/AccessValues';
import Default from '../../public/examples/textInputGroup/Default';
import Rtl from '../../public/examples/textInputGroup/Rtl';
import Vertical from '../../public/examples/textInputGroup/Vertical';
import useExamples from '../../utils/useExamples';

export default function PageReel() {
  const examples = useExamples('textInputGroup');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">TextInput Group</h1>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Vertical"
          preview={<Vertical />}
          code={examples ? examples.Vertical : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="RTL"
          preview={<Rtl />}
          code={examples ? examples.Rtl : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Access Values"
          preview={<AccessValues />}
          code={examples ? examples.AccessValues : 'Loading'}
        />
      </section>
    </>
  );
}
