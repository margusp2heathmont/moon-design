import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="datetime-local"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
      hintText="Error message"
      isError
    />
    <TextInput
      type="datetime-local"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
      hintText="Error message"
      isError
    />
    <TextInput
      type="datetime-local"
      inputSize="xlarge"
      label="xlarge"
      placeholder="Placeholder"
      hintText="Error message"
      isError
    />
  </div>
);

export default Example;
