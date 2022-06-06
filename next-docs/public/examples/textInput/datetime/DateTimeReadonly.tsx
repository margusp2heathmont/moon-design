import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="datetime-local"
      inputSize="medium"
      label="medium"
      hintText="Informative message holder"
      readOnly
    />
    <TextInput
      type="datetime-local"
      inputSize="large"
      label="large"
      hintText="Informative message holder"
      readOnly
    />
    <TextInput
      type="datetime-local"
      inputSize="xlarge"
      label="xlarge"
      hintText="Informative message holder"
      readOnly
    />
  </div>
);

export default Example;
