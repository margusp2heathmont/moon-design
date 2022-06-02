import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core-tw';

const Example = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Username',
    isError: true,
  };

  const inputProps2 = {
    type: 'email',
    inputSize: 'medium',
    placeholder: 'Email',
  };
  return (
    <>
      <TextInputGroup
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
      <TextInputGroup
        orientation="vertical"
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
    </>
  );
};

export default Example;
