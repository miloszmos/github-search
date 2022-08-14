import React from 'react';
import {
  SkeletonAvatar,
  SkeletonInline,
  SkeletonLine,
  SkeletonStyles,
} from './SkeletonItemLoading.styles';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { device } from '../../../../styles/globalStyles';

export const SkeletonItemsLoadingList = ({
  length = 25,
}: {
  length?: number;
}) => {
  return (
    <div className="skeleton-list">
      {Array(length)
        .fill(null)
        .map((_el, i) => (
          <SkeletonItemLoading key={`${Math.random() * 10}-${i}`} />
        ))}
    </div>
  );
};

export const SkeletonItemLoading = () => {
  const isMedium = useMediaQuery(device.sm);
  return (
    <SkeletonStyles>
      <div className="left">
        <SkeletonAvatar />
      </div>
      <div className="right">
        <SkeletonLine h={16} w={isMedium ? 25 : 60} mb={5} />
        <SkeletonLine h={16} w={isMedium ? 30 : 80} mb={15} />
        <SkeletonLine h={12} w={50} mb={10} />
        <SkeletonInline>
          <SkeletonLine w={isMedium ? 5 : 20} />
          <SkeletonLine w={isMedium ? 15 : 25} />
          <SkeletonLine w={isMedium ? 10 : 20} />
        </SkeletonInline>
      </div>
    </SkeletonStyles>
  );
};
