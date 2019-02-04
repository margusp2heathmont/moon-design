import * as React from 'react';
import { create } from 'react-test-renderer';
import { Select } from '../';

const TestOptions = () => (
  <React.Fragment>
    <option value="">Select an option</option>
    <option value="never-gonna">Never gonna</option>
    <option value="give-you-up">give you up</option>
    <option value="let-you-down">let you down</option>
  </React.Fragment>
);

const TestOptionsShort = () => (
  <React.Fragment>
    <option value="eur">EUR</option>
    <option value="usd">USD</option>
    <option value="gbp">GBP</option>
  </React.Fragment>
);

describe('Select', () => {
  test('renders a select input with options', () => {
    const select = create(
      <Select>
        <TestOptions />
      </Select>
    );

    expect(select).toMatchSnapshot();
  });

  test("renders a 'short' variant select input with options", () => {
    const select = create(
      <Select short>
        <TestOptionsShort />
      </Select>
    );

    expect(select).toMatchSnapshot();
  });

  describe('renders as disabled', () => {
    test('for default select input', () => {
      const select = create(
        <Select disabled>
          <TestOptions />
        </Select>
      );

      expect(select).toMatchSnapshot();
    });

    test("for 'short' select input", () => {
      const select = create(
        <Select disabled short>
          <TestOptionsShort />
        </Select>
      );

      expect(select).toMatchSnapshot();
    });
  });

  describe('renders as full-width', () => {
    test('for default select input', () => {
      const select = create(
        <Select fullWidth>
          <TestOptions />
        </Select>
      );

      expect(select).toMatchSnapshot();
    });

    test("for 'short' select input", () => {
      const select = create(
        <Select fullWidth short>
          <TestOptionsShort />
        </Select>
      );

      expect(select).toMatchSnapshot();
    });
  });
});
