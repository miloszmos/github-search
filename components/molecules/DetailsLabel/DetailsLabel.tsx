import React, { ReactNode } from 'react';
import { LabelStyles } from '../../atoms/Label/Label.styles';
import { CountStyles, DetailsLabelStyles } from './DetailsLabel.styles';

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
      {label && <LabelStyles>{label}</LabelStyles>}
    </DetailsLabelStyles>
  );
};

export default DetailsLabel;
