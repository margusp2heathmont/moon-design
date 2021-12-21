import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="xsmall"
        placeholder="xsmall"
        showPasswordText="Show"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="small"
        placeholder="small"
        showPasswordText="Show"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="medium"
        placeholder="medium"
        showPasswordText="Show"
      />
    </div>
  </div>
);

export default Example;