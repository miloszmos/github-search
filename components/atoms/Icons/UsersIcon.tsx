import * as React from 'react';
import { SVGProps } from 'react';

const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.2 6.147a3.28 3.28 0 0 0 1.133-2.48 3.333 3.333 0 1 0-6.666 0A3.28 3.28 0 0 0 3.8 6.147 5.333 5.333 0 0 0 .667 11 .667.667 0 0 0 2 11a4 4 0 1 1 8 0 .667.667 0 0 0 1.333 0A5.334 5.334 0 0 0 8.2 6.147ZM6 5.667a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6.493.213A3.332 3.332 0 0 0 10 .333a.667.667 0 1 0 0 1.334 2 2 0 0 1 2 2 2 2 0 0 1-1 1.727.667.667 0 0 0-.033 1.133l.26.173.086.047A4.666 4.666 0 0 1 13.98 11a.667.667 0 0 0 1.333 0 6 6 0 0 0-2.82-5.12Z"
      fill="#6F7781"
    />
  </svg>
);

export default UsersIcon;
