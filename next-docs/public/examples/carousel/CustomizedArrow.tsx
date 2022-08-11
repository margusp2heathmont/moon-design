// @ts-nocheck
import { Carousel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ExampleContent = styled.div({
  width: rem(320),
  height: rem(192),
  borderRadius: '0.5rem',
  background: 'darkgray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: rem(32),
});

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel
      scrollToLeftButton={({ scrollToStep, disabled }) => (
        <button disabled={disabled} onClick={scrollToStep}>
          Scroll to left
        </button>
      )}
      scrollToRightButton={({ scrollToStep, disabled }) => (
        <button disabled={disabled} onClick={scrollToStep}>
          Scroll to Right
        </button>
      )}
      items={items.map((item, index) => (
        <ExampleContent>{index}</ExampleContent>
      ))}
    />
  );
};

export default Example;
