import React from 'react';

const GenericBlock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.93 9.822a.5.5 0 00-.707-.707l.707.707zM9.07 22.27a.5.5 0 10.707.707l-.707-.707zM22.223 9.115L9.07 22.269l.707.707L22.93 9.822l-.707-.707zM25 16a9 9 0 01-9 9v1c5.523 0 10-4.477 10-10h-1zm-9 9a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zm-9-9a9 9 0 019-9V6C10.477 6 6 10.477 6 16h1zm9-9a9 9 0 019 9h1c0-5.523-4.477-10-10-10v1z"
      fill="currentColor"
    />
  </svg>
);

export default GenericBlock;
