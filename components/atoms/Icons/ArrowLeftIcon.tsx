import * as React from 'react';
import { SVGProps } from 'react';
import { iconColors } from '../../../styles/globalStyles';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  active?: boolean;
}

const ArrowLeftIcon = ({ active = false, ...props }: ArrowProps) => {
  const color = active ? iconColors['active'] : iconColors['disabled'];
  return (
    <svg
      width={6}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 1 1 5l4 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
