import React from "react";
import {
  ArrowArcLeftIcon,
  ArrowLeftIcon,
  ToggleLeft,
  ToggleRight,
} from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/studentSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.students);
  return (
    <div className="sticky top-0 w-full  flex flex-col gap-1 p-4 bg-q3-surface-default-glass-normal backdrop-blur-3xl border rounded-b-[12px] z-[100] border-q3-stroke-light">
      <div className=" items-center gap-4">
        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-q3-surface-dimmer rounded-full flex justify-center items-center">
          <ArrowLeftIcon size={20} className="text-q3-neutral-default" />
        </span>
        <p className="text-q3-neutral-default text-lg lg:text-2xl font-inter font-bold">
          Leadboard
        </p>
      </div>
      <p className="text-q3-neutral-light font-xs  text-xs lg:text-base ">
        JEE Main Test series / Quizrr Part Test / Quizrr Part Test (QPT) - 1
        (Old) / Analysis / Leaderboard
      </p>
      <button
        className="absolute right-2 top-3 lg:right-2 lg:top-8 text-white rounded-[24px]"
        onClick={() => dispatch(toggleTheme())}
      >
        {theme === "light" ? (
          <ToggleLeft
            size={32}
            weight="fill"
            className=" text-q3-neutral-default"
          />
        ) : (
          <ToggleRight
            size={32}
            weight="fill"
            className=" text-q3-neutral-default"
          />
        )}
      </button>
    </div>
  );
};

export default Header;
