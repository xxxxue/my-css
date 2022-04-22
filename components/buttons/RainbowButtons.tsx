import { FC, memo } from "react";

interface IProps {}
let RainbowButtons: FC<IProps> = function (props) {
  return (
    <>
      <a href="#" className="myBtn3">
        <span>Start Coding</span>
      </a>
      <style jsx>
        {`
          .myBtn3 {
            width: 200px;
            text-align: center;
            position: relative;
            border-radius: 6px;
            box-sizing: border-box;
            color: hsl(0deg 0% 100%);
            display: block;
            z-index: 2;
            overflow: hidden;
            padding: 3px;
          }

          .myBtn3:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background: linear-gradient(
              115deg,
              #4fcf70,
              #fad648,
              #a767e5,
              #12bcfe,
              #44ce7b
            );
            background-size: 50% 100%;
          }

          .myBtn3 span {
            position: relative;
            z-index: 2;
            padding: 0.875rem 0;
            font-size: 1.1rem;
            align-items: center;
            background: black;
            border-radius: 3px;
            display: block;
            justify-content: center;
            box-sizing: border-box;
            height: 100%;
          }

           {
            /* .myBtn3:focus:before,
          .myBtn3:hover:before, */
          }
          .myBtn3:before {
            animation: rainbowSlide 0.75s linear infinite;
          }

          @keyframes rainbowSlide {
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </>
  );
};

export default memo(RainbowButtons);
