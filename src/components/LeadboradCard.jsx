import React from "react";
import avtar from "../assets/avtar.png";
import {
  Atom,
  Checks,
  Flask,
  MathOperations,
  Target,
} from "@phosphor-icons/react";
import firstPosition from "../assets/first-position.svg";
import secondPosition from "../assets/second-position.svg";
import thirdPosition from "../assets/third-position.svg";

const LeadboradCard = ({ student }) => {
  if (!student) return null;

  const { rank, userId, totalMarkScored, accuracy, subjects, marksGained } =
    student;

  const getSubjectScore = (title) => {
    const subject = subjects.find((s) => s.subjectId.title === title);
    return subject ? subject.totalMarkScored : 0;
  };

  const getRankSuffix = (rank) => {
    if (rank === 1) return "st";
    if (rank === 2) return "nd";
    if (rank === 3) return "rd";
    return "th";
  };

  const getPostion = () => {
    if (rank === 1) return firstPosition;
    if (rank === 2) return secondPosition;
    if (rank === 3) return thirdPosition;
    return null;
  };

  const rankStyles = {
    1: {
      border: "var(--rank1-border)",
      bg: "var(--rank1-bg)",
      rankBg: "var(--rank1-rank-bg)",
      rankColor: "var(--rank1-rank-color)",
    },
    2: {
      border: "var(--rank2-border)",
      bg: "var(--rank2-bg)",
      rankBg: "var(--rank2-rank-bg)",
      rankColor: "var(--rank2-rank-color)",
    },
    3: {
      border: "var(--rank3-border)",
      bg: "var(--rank3-bg)",
      rankBg: "var(--rank3-rank-bg)",
      rankColor: "var(--rank3-rank-color)",
    },
    default: {
      border: "var(--default-border)",
      bg: "var(--default-bg)",
      rankBg: "var( --default-rank-bg)",
      rankColor: "var(--default-rank-color)",
    },
  };

  const style = rankStyles[rank] || rankStyles.default;

  return (
    <div
      className="rounded-3xl p-[1px] w-[264px] h-[392px]"
      style={{ background: style.border }}
    >
      <div
        className="rounded-3xl h-full w-full p-2 lg:p-4 flex flex-col items-center"
        style={{ background: style.bg }}
      >
        <div className="flex flex-col gap-3 w-full items-center mb-6">
          <div className="flex flex-col justify-center items-center">
            <img
              src={userId?.profilePicture || avtar}
              alt={userId?.name || "Avatar"}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border"
            />
            {rank <= 3 ? (
              <img src={getPostion(rank)} className="w-6 h-6" />
            ) : (
              <span className="w-6 h-6"></span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full justify-center items-center">
            <p className="text-q3-neutral-default font-bold md:text-sm lg:text-basetext-base">
              {userId?.name || "Unknown"} {rank > 3 && "(You)"}
            </p>
            <span
              className="px-3 py-1 rounded-full font-normal md:text-sm lg:text-base"
              style={{
                background: style.rankBg,
                color: style.rankColor,
              }}
            >
              {rank}
              {getRankSuffix(rank)} Rank
            </span>
          </div>
        </div>

        {/* Scores */}
        <div className="w-full flex flex-col gap-3">
          {/* Overall Score */}
          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <Checks size={16} className="text-q3-neutral-default" />
              <p className="text-q3-neutral-light font-bold  md:text-sm lg:text-base">
                Overall Score
              </p>
            </span>
            <span className="text-q3-neutral-light font-medium md:text-sm lg:text-base">
              {marksGained}/300
            </span>
          </div>

          {/* Physics */}
          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <Atom size={16} className="text-q3-base-embered" />
              <p className="text-q3-neutral-light font-bold md:text-sm lg:text-base">
                Phy Score
              </p>
            </span>
            <span className="text-q3-neutral-light font-medium md:text-sm lg:text-base">
              {getSubjectScore("Physics")}
            </span>
          </div>

          {/* Chemistry */}
          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <Flask size={16} className="text-q3-base-orange" />
              <p className="text-q3-neutral-light font-bold md:text-sm lg:text-base">
                Chem Score
              </p>
            </span>
            <span className="text-q3-neutral-light font-medium md:text-sm lg:text-base">
              {getSubjectScore("Chemistry")}
            </span>
          </div>

          {/* Math */}
          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <MathOperations size={16} className="text-q3-base-blue" />
              <p className="text-q3-neutral-light font-bold md:text-sm lg:text-base">
                Maths Score
              </p>
            </span>
            <span className="text-q3-neutral-light font-medium md:text-sm lg:text-base">
              {getSubjectScore("Mathematics")}
            </span>
          </div>

          {/* Accuracy */}
          <div className="flex justify-between">
            <span className="flex justify-center items-center gap-1 lg:gap-2">
              <Target size={16} className="text-q3-base-pink" />
              <p className="text-q3-neutral-light font-bold md:text-sm lg:text-base">
                Accuracy
              </p>
            </span>
            <span className="text-q3-neutral-light font-medium md:text-sm lg:text-base">
              {accuracy.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadboradCard;
