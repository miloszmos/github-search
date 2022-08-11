import * as React from 'react';
import { SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8 2.26 1.38 2.79.23.5.5.075 3.08.445L11 8.22l-.375.365.09.5.525 3.065-2.755-1.445L8 10.5l-.465.245L4.78 12.17l.5-3.065.09-.5L5 8.22 2.79 6.045 5.87 5.6l.5-.075.23-.5L8 2.26ZM8 0 5.725 4.61.64 5.345l3.68 3.59L3.45 14 8 11.61 12.55 14l-.87-5.065 3.68-3.585-5.085-.74L8 0Z"
      fill="#6F7781"
    />
  </svg>
);

export default StarIcon;
