import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LeaderboardTable = () => {
  const { leaderboard } = useSelector((state) => state.students);

  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [pageStudents, setPageStudents] = useState([]);
  const usersPerPage = 20;

  const getSubjectScore = (student, title) => {
    const subject = student.subjects.find((s) => s.subjectId.title === title);
    return subject ? subject.totalMarkScored : 0;
  };

  useEffect(() => {
    if (width <= 1024) {
      const startIndex = page * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      setPageStudents(leaderboard.slice(startIndex, endIndex));
    } else {
      const startIndex = 3 + page * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      setPageStudents(leaderboard.slice(startIndex, endIndex));
    }
  }, [leaderboard, page, width]);

  const totalPages =
    width <= 1024
      ? Math.ceil(leaderboard.length / usersPerPage)
      : Math.ceil((leaderboard.length - 3) / usersPerPage);

  const canGoPrev = page > 0;
  const canGoNext = page < totalPages - 1;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return {
          background: "linear-gradient(180deg, #F54A00 0%, #E17100 100%)",
          color: "#fff",
        };
      case 2:
        return {
          background: "linear-gradient(180deg, #A9B5C3 0%, #636F7D 100%)",
          color: "#fff",
        };
      case 3:
        return {
          background: "linear-gradient(180deg, #A93410 0%, #CB3E13 100%)",
          color: "#fff",
        };
      default:
        return {
          background: "#F3F3F3",
          color: "#000",
        };
    }
  };

  return (
    <div className="overflow-x-auto w-full rounded-xl border border-q3-stroke-light scrollbar-hide">
      <div className="max-h-[calc(100vh-220px)] md:h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
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
            {pageStudents.map((student, index) => (
              <tr className="text-center text-q3-neutral-default bg-q3-surface-default border border-q3-stroke-light text-xs md:text-sm">
                <td className="py-2 px-1 md:py-3 md:px-2 flex justify-center items-center">
                  <span
                    className="text-[10px] w-6 h-6 border border-q3-stroke-normal bg-[#D2DFEB] rounded-full flex items-center justify-center font-medium"
                    style={{
                      ...getRankStyle(
                        width <= 748
                          ? page * usersPerPage + index + 1
                          : 3 + page * usersPerPage + index + 1
                      ),
                    }}
                  >
                    {width <= 748
                      ? page * usersPerPage + index + 1
                      : 3 + page * usersPerPage + index + 1}
                  </span>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={student.userId.profilePicture}
                      alt={student.userId?.name || "Avatar"}
                      className="w-6 h-6 rounded-full border flex-shrink-0"
                    />
                    <span className="font-medium truncate md:max-w-[100px]">
                      {student.userId.name}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2">
                  <span className="py-1 px-3 rounded-full bg-q3-surface-dim">
                    <span className="font-bold">{student.totalMarkScored}</span>
                    /{300}
                  </span>
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2 font-medium">
                  {getSubjectScore(student, "Physics")}
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2 font-medium">
                  {getSubjectScore(student, "Chemistry")}
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2 font-medium">
                  {getSubjectScore(student, "Mathematics")}
                </td>
                <td className="py-2 px-1 md:py-3 md:px-2 font-medium">
                  {student.accuracy.toFixed(2)}%
                </td>
              </tr>
            ))}

            <tr className="text-center text-q3-neutral-default bg-q3-surface-default border border-q3-stroke-light text-xs md:text-sm sticky bottom-0">
              <td colSpan={7} className="py-3">
                <div className="flex gap-2 justify-center items-center">
                  <button
                    className={`px-4 py-2 border rounded-full border-q3-stroke-normal text-q3-neutral-default font-medium ${
                      !canGoPrev && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!canGoPrev}
                    onClick={() => canGoPrev && setPage(page - 1)}
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`w-8 h-8 flex justify-center text-xs text-q3-neutral-default items-center border rounded-full font-medium border-q3-stroke-normal ${
                        i === page
                          ? "bg-q3-accent-normal font-bold text-q3-surface-default"
                          : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    className={`px-4 py-2 border text-q3-neutral-default rounded-full border-q3-stroke-normal font-medium ${
                      !canGoNext &&
                      "opacity-50 text-q3-neutral-default cursor-not-allowed"
                    }`}
                    disabled={!canGoNext}
                    onClick={() => canGoNext && setPage(page + 1)}
                  >
                    Next
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
