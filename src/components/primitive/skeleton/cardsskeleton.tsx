import React from 'react';

import { Skeleton } from './skeleton';

export const CardsSkeleton = ({ count = 1 }: { count?: number }) => {
  return (
    <React.Fragment>
      {Array(count)
        .fill('*')
        .map((_, index) => (
          <div
            key={index}
            className="flex h-screen flex-col space-y-6 bg-gray-800 px-8 py-6 shadow"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex space-x-2">
                <Skeleton variant="rectangle" width={85} height={25} />
                <Skeleton width={50} />
              </div>
              <div className="flex space-x-2">
                <Skeleton variant="rectangle" width={85} height={25} />
                <Skeleton width={85} height={25} />
              </div>
            </div>
            <Skeleton width={250} height={25} />
            <div className="mt-6 flex w-full space-x-4">
              {Array(3)
                .fill('*')
                .map((__, i) => (
                  <Skeleton key={i} height={250} />
                ))}
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};
