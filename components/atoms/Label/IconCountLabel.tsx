import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { LabelStyles } from './Label.styles';

interface DetailsProps {
  label?: string;
  icon?: ReactNode;
  count: number;
}

const IconCountLabel = ({ count, icon, label }: DetailsProps) => {
  return (
    <IconCountLabelWrapper>
      {icon && <span className="icon">{icon}</span>}
      <CountStyles>{count}</CountStyles>
      {label && <LabelStyles>{label}</LabelStyles>}
    </IconCountLabelWrapper>
  );
};

export default IconCountLabel;

const IconCountLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  .label {
    margin-left: 4px;
  }
  .icon {
    margin-right: 4px;
  }
`;

export const CountStyles = styled(LabelStyles)`
  font-weight: var(--fw-semiBold);
`;
