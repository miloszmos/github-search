import React from 'react';
import styled, { css } from 'styled-components';
import { LabelStyles } from './Label.styles';

interface DotProps {
  label?: string;
  bgColor?: string | null;
}
type DotStylesType = Pick<DotProps, 'bgColor'>;

const Dot = ({ label, bgColor }: DotProps) => {
  return (
    <DotContainer>
      <DotStyles bgColor={bgColor}></DotStyles>
      {label && <LabelWrapper>{label}</LabelWrapper>}
    </DotContainer>
  );
};

export default Dot;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LabelWrapper = styled(LabelStyles)`
  margin-left: 4px;
`;

const DotStyles = styled.span<DotStylesType>`
  display: flex;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: var(--black);

  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `};
`;
