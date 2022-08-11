import * as React from 'react';
import { SVGProps } from 'react';

const RepositoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.167 17.325H13c1.005 0 2.5-.666 2.5-2.5V3.16c0-1.835-1.495-2.5-2.5-2.5H.5v1.666h12.49c.385.01.843.163.843.834 0 .084-.007.159-.02.227-.093.48-.486.598-.822.606H1.333c-.015 0-.025.007-.04.008H.5V15.66c0 .919.748 1.666 1.667 1.666Zm0-11.666h11.666v9.166c0 .672-.458.824-.833.834H7.167V9.825L5.5 10.66l-1.667-.834v5.834H2.167v-10Z"
      fill="#6F7781"
    />
  </svg>
);

export default RepositoryIcon;
