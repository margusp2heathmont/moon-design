import React from 'react';

const TypeDefault = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      filter="url(#TypeDefault_svg__filter0_d_2567:571)"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M16.148 24.473l1.863-1.003 1.614-.84-2.567-4.815h4.332L10.01 6.407v16.015l3.316-3.221 2.822 5.272z"
        fill="#fff"
      />
      <path
        d="M16.43 23l1.766-.941-2.775-5.202h3.604L11 8.814v11.188l2.53-2.442 2.9 5.44z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="TypeDefault_svg__filter0_d_2567:571"
        x={-2}
        y={-1}
        width={36}
        height={36}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4049 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2567:571"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2567:571"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default TypeDefault;