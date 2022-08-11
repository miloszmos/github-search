import React from 'react';
import {
  SkeletonAvatar,
  SkeletonInline,
  SkeletonLine,
  SkeletonStyles,
} from './SkeletonItemLoading.styles';

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
  return (
    <SkeletonStyles>
      <div className="left">
        <SkeletonAvatar />
      </div>
      <div className="right">
        <SkeletonLine h={16} w={25} mb={5} />
        <SkeletonLine h={16} w={30} mb={15} />
        <SkeletonLine h={12} w={50} mb={10} />
        <SkeletonInline>
          <SkeletonLine w={5} />
          <SkeletonLine w={15} />
          <SkeletonLine w={10} />
        </SkeletonInline>
      </div>
    </SkeletonStyles>
  );
};
