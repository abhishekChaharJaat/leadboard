import React, { useEffect, useState } from "react";
import LeadboradCard from "../components/LeadboradCard";
import { fetchLeaderboard, setUser } from "../redux/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import LeaderboardTable from "../components/LeadboradTable";
import LeaderboardCardSkeleton from "../components/LeaderboardCardSkeleton";
import LeaderboardTableSkeleton from "../components/LeaderboardTableSkeleton";
const Leadboard = () => {
  const dispatch = useDispatch();
  const [topFour, setTopFour] = useState([]);
  const { leaderboard, status, error } = useSelector((state) => state.students);

  const yourId = "685999b6906f3c4845bd5e79";

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  //  top 4 card
  useEffect(() => {
    if (!leaderboard || leaderboard.length === 0) return;

    const topThreeStudents = leaderboard.slice(0, 3);
    const you = leaderboard.filter((student) => student.userId._id === yourId);

    const merged = topThreeStudents.some((s) => s.userId._id === yourId)
      ? topThreeStudents
      : [...topThreeStudents, ...you];
    dispatch(setUser(you[0]));
    setTopFour(merged);
  }, [leaderboard]);

  if (error) return <p>Error loading leaderboard</p>;

  return (
    <div className="bg-q3-surface-default p-2 lg:p-4 lg:space-y-6 ">
      {/* Top 4 Cards */}
      <div className="hidden lg:flex justify-between gap-4 overflow-x-auto">
        {status === "loading"
          ? Array(4)
              .fill(null)
              .map((_, index) => <LeaderboardCardSkeleton key={index} />)
          : topFour.map((student, index) => (
              <LeadboradCard key={student?._id || index} student={student} />
            ))}
      </div>
      {/* Table */}
      <div className="relative">
        {status === "loading" ? (
          <LeaderboardTableSkeleton />
        ) : (
          <LeaderboardTable />
        )}
      </div>
    </div>
  );
};

export default Leadboard;
