import { NextPage } from "next";
import { FC, memo } from "react";
import RainbowBox from "../components/box/RainbowBox";
import ColorButtons from "../components/buttons/ColorButtons";
import JbButtons from "../components/buttons/JbButtons";
import RainbowButtons from "../components/buttons/RainbowButtons";

interface IProps {}
let page7: NextPage<IProps> = function (props) {
  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center w-full p-5 space-y-5 bg-black ">
          <div>
            <RainbowButtons />
          </div>
          <div className="flex flex-col px-5 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <RainbowBox
              className="from-[#D8B4FE] to-[#818CF8]"
              count="1000,000"
            >
              C# 天下第一
            </RainbowBox>

            <RainbowBox
              className="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              count="1000,000"
            >
              React 天下第一
            </RainbowBox>

            <RainbowBox
              className="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              count="1000,000"
            >
              Tailwind 天下第一
            </RainbowBox>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <RainbowButtons />

          <ColorButtons />
        </div>

        <div className="flex items-center justify-center px-2 space-x-3">
          <JbButtons />
        </div>
      </div>
    </>
  );
};

export default memo(page7);
