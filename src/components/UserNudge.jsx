import React from "react";
import { useSelector } from "react-redux";

const UserNudge = () => {
  const { user } = useSelector((state) => state.students);

  const getSubjectScore = (student, title) => {
    const subject = student.subjects.find((s) => s.subjectId.title === title);
    return subject ? subject.totalMarkScored : 0;
  };

  if (!user) return null;

  return (
    <div className="sticky bottom-0 py-2  overflow-x-auto w-full backdrop-blur-xl md:rounded-t-xl border bg-q3-surface-dimmest border-q3-stroke-light scrollbar-hide z-[100]">
      <table className="min-w-full border-collapse">
        <tbody>
          <tr className="text-q3-neutral-default text-xs md:text-base font-medium  border-q3-stroke-light rounded-xl">
            <th className="py-2 px-1 md:py-4 md:px-4 w-12">
              <span className="text-[10px] w-6 h-6 bg-q3-surface-dim border border-q3-stroke-normal rounded-full flex items-center justify-center font-medium">
                {user.rank}
              </span>
            </th>
            <th className="py-2 px-1 md:py-4 md:px-4 text-left w-12 md:w-24">
              <div className="flex items-center gap-2">
                <img
                  src={user.userId.profilePicture}
                  alt={user.userId?.name || "Avatar"}
                  className="w-8 h-8 rounded-full border flex-shrink-0"
                />
                <span className="font-medium truncate md:max-w-[120px]">
                  {user.userId.name}(You)
                </span>
              </div>
            </th>
            <th className="py-2 px-1 md:py-4 md:px-4">
              {" "}
              <span className="py-1 px-3 rounded-full bg-q3-surface-dim font-normal">
                <span className="font-bold">{user.totalMarkScored}</span>/{300}
              </span>
            </th>
            <th className="py-2 px-1 md:py-4 md:px-4">
              {" "}
              {getSubjectScore(user, "Physics")}
            </th>
            <th className="py-2 px-1 md:py-4 md:px-4">
              {" "}
              {getSubjectScore(user, "Chemistry")}
            </th>
            <th className="py-2 px-1 md:py-4 md:px-4">
              {getSubjectScore(user, "Mathematics")}
            </th>
            <th className="py-2 px-1 md:py-4 md:px-4">
              {" "}
              {user.accuracy.toFixed(2)}%
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserNudge;
