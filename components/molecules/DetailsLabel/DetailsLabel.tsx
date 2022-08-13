import React, { ReactNode } from 'react';
import {
  CountStyles,
  DetailsLabelStyles,
  LabelWrapper,
} from './DetailsLabel.styles';

interface DetailsProps {
  label?: string;
  icon?: ReactNode;
  count: number;
}

const DetailsLabel = ({ count, icon, label }: DetailsProps) => {
  return (
    <DetailsLabelStyles>
      {icon && <span className="icon">{icon}</span>}
      <CountStyles>{count}</CountStyles>
      {label && <LabelWrapper>{label}</LabelWrapper>}
    </DetailsLabelStyles>
  );
};

export default DetailsLabel;
