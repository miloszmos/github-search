import styled, { css } from 'styled-components';

export const SkeletonInline = styled.div`
  display: flex;
  div {
    margin-right: 10px;
  }
`;

export const SkeletonStyles = styled.div`
  padding-top: 2rem;
  max-width: 100%;
  width: 100%;
  background: var(--white);
  margin-bottom: 1.6rem;
  display: flex;
  border-top: 1px solid var(--bg-gray);
  .right {
    width: 100%;
  }
  .left {
    width: 20px;
    margin-right: 15px;
  }
  @keyframes wave-lines {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
  @keyframes wave-squares {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

export const SkeletonAvatar = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: rgba(130, 130, 130, 0.2);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, rgba(130, 130, 130, 0.2)),
    color-stop(18%, rgba(130, 130, 130, 0.3)),
    color-stop(33%, rgba(130, 130, 130, 0.2))
  );
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave-squares 2s infinite ease-out;
`;

export const SkeletonLine = styled.div<{
  h?: number;
  w?: number;
  mb?: number;
}>`
  height: 1.2rem;
  margin-bottom: 6px;
  border-radius: 2px;
  background: rgba(130, 130, 130, 0.2);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, rgba(130, 130, 130, 0.2)),
    color-stop(18%, rgba(130, 130, 130, 0.3)),
    color-stop(33%, rgba(130, 130, 130, 0.2))
  );
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave-lines 2s infinite ease-out;
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${(props) =>
    props.h &&
    css`
      height: ${props.h}px;
    `}
  ${(props) =>
    props.w &&
    css`
      width: ${props.w}%;
    `}
`;
