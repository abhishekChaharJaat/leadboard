import React from "react";

const LeaderboardTableSkeleton = () => {
  const skeletonRows = Array(10).fill(null);

  return (
    <div className="overflow-x-auto w-full rounded-xl border border-q3-stroke-light">
      <div className="max-h-[calc(100vh-200px)] md:h-[calc(100vh-200px)] overflow-y-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-q3-surface-dim sticky top-0 z-10">
            <tr className="text-q3-neutral-light text-xs md:text-base font-medium border border-q3-stroke-light rounded-xl">
              <th className="py-2 px-1 md:py-4 md:px-4 w-12">Rank</th>
              <th className="py-2 px-1 md:py-4 md:px-4 text-left w-12 md:w-24">
                Student Name
              </th>
              <th className="py-2 px-1 md:py-4 md:px-4">Overall</th>
              <th className="py-2 px-1 md:py-4 md:px-4">Phy</th>
              <th className="py-2 px-1 md:py-4 md:px-4">Che</th>
              <th className="py-2 px-1 md:py-4 md:px-4">Math</th>
              <th className="py-2 px-1 md:py-4 md:px-4">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {skeletonRows.map((_, index) => (
              <tr
                key={index}
                className="text-center text-q3-neutral-default bg-q3-surface-default border border-q3-stroke-light"
              >
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <div className="flex justify-center items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
                  </div>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
                    <div className="h-4 w-20 md:w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <div className="flex justify-center">
                    <div className="h-6 w-16 rounded-full bg-gray-200 animate-pulse" />
                  </div>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <div className="flex justify-center">
                    <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <div className="flex justify-center">
                    <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <div className="flex justify-center">
                    <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <div className="flex justify-center">
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                  </div>
                </td>
              </tr>
            ))}

            <tr className="text-center text-q3-neutral-default bg-q3-surface-default border border-q3-stroke-light sticky bottom-0">
              <td colSpan={7} className="py-3">
                <div className="flex gap-2 justify-center items-center">
                  <div className="w-16 h-10 rounded-full bg-gray-200 animate-pulse" />
                  <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                  <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                  <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                  <div className="w-16 h-10 rounded-full bg-gray-200 animate-pulse" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTableSkeleton;