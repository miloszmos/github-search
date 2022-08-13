import styled from 'styled-components';
import { LabelStyles } from '../../atoms/Label/Label.styles';

export const DetailsLabelStyles = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 4px;
  }
`;

export const LabelWrapper = styled(LabelStyles)`
  margin-left: 4px;
`;

export const CountStyles = styled(LabelStyles)`
  font-weight: var(--fw-semiBold);
`;
