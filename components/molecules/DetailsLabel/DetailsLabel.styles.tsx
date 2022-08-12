import styled from 'styled-components';
import { LabelStyles } from '../../atoms/Label/Label.styles';

export const DetailsLabelStyles = styled.div`
  display: flex;
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
