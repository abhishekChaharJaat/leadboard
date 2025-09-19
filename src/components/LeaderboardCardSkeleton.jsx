import React from "react";

const LeaderboardCardSkeleton = () => {
  return (
    <div className="rounded-3xl p-[1px] w-[264px] h-[392px] bg-gray-200 animate-pulse">
      <div className="rounded-3xl h-full w-full p-2 lg:p-4 flex flex-col items-center bg-white">
        <div className="flex flex-col gap-3 w-full items-center mb-6">
          <div className="flex flex-col justify-center items-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-200 animate-pulse" />
            <div className="w-6 h-6 mt-1 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex flex-col gap-1 w-full justify-center items-center">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-20 bg-gray-200 rounded-md animate-pulse mt-1" />
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            </span>
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            </span>
            <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            </span>
            <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            </span>
            <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            </span>
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCardSkeleton;