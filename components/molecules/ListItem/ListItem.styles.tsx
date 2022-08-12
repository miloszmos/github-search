import styled from 'styled-components';
import { LabelStyles } from '../../atoms/Label/Label.styles';

export const ItemTextStyles = styled.p`
  color: var(--primary);
  font-weight: var(--fw-medium);
  font-size: 1.6rem;
  line-height: 2.4rem;
  &.gray {
    color: var(--gray);
  }
  &.mb {
    margin-bottom: 0.5rem;
  }
  &.mt {
    margin-top: 0.5rem;
  }
`;

export const ItemDescriptionStyles = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: var(--fw-medium);
  color: var(--black);
`;

export const ItemWrapperStyles = styled.div`
  padding-top: 2rem;
  padding-bottom: 1.6rem;
  border-top: 1px solid var(--bg-gray);
  display: flex;
  align-items: flex-start;
  .right {
    margin-left: 10.5px;
  }
  .title {
    display: flex;
    align-items: center;
  }
`;

export const LabelWrapper = styled(LabelStyles)`
  margin-left: 14px;
`;

export const InfoStyles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  .icon {
    margin-top: -2px;
  }
`;
