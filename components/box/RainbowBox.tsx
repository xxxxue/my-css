import classNames from "classnames";
import { FC, memo } from "react";

let EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    ></path>
  </svg>
);

interface IProps {
  count: string;
  children: string;
  className: string;
}
let RainbowBox: FC<IProps> = function (props) {
  return (
    <>
      <div
        className={classNames(
          "w-full transform cursor-pointer rounded-xl bg-gradient-to-r   p-1 transition-all hover:scale-[1.01] md:w-1/3",
          props.className
        )}
      >
        <div className="flex h-full flex-col justify-between rounded-lg  bg-gray-900 p-4">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-6 w-full text-lg font-medium tracking-tight text-gray-100 sm:mb-10 md:text-lg">
              {props.children}
            </h4>
          </div>
          <div className="capsize flex items-center text-gray-200">
            <EyeIcon />
            <span className="capsize ml-2 align-baseline">{props.count}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(RainbowBox);
