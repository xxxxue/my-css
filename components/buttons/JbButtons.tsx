import { FC, memo } from "react";

/**
 * 渐变按钮
 */
let JbButtons: FC = function () {
  return (
    <>
     
        <button className="blue2orange my-button button">b2o</button>
        <button className="green my-button button">green</button>
        <button className="blue my-button button">blue</button>
        <button className="orange my-button button">orange</button>
        <button className="pink my-button button">pink</button>
    

      <style jsx>
        {`
          .button {
            width: 150px;
            height: 50px;
            border-radius: 20px;
            font-size: 18px;
          }

          .my-button {
            background-size: 100% !important;
            transition: background-size 1s ease-in-out;
          }
          .my-button:hover {
            background-color: null;
            background-size: 200% !important;
          }
          .my-button:active {
            transform: translateY(1px);
          }

          .blue {
            color: white;

            --start-color: #0032f8;
            --end-color: #0cddf9;

            border: transparent;
            background: linear-gradient(
              45deg,
              var(--start-color) 0%,
              var(--end-color) 100%
            );
            box-shadow: var(--end-color) 2px 1px 3px;
          }

          .green {
            color: white;

            --start-color: #09f9b1;
            --end-color: #40c057;

            border: transparent;
            background: linear-gradient(
              105deg,
              var(--start-color) 0%,
              var(--end-color) 100%
            );

            box-shadow: var(--start-color) 2px 1px 3px;
          }

          .orange {
            color: white;

            --start-color: #ff7300;
            --end-color: #f70000;

            border: transparent;
            background: linear-gradient(
              105deg,
              var(--start-color) 0%,
              var(--end-color) 100%
            );
            box-shadow: var(--start-color) 2px 1px 3px;
          }
          .pink {
            color: white;

            --start-color: #dc13ff;
            --end-color: #ff0059;

            border: transparent;
            background: linear-gradient(
              105deg,
              var(--start-color) 0%,
              var(--end-color) 100%
            );
            box-shadow: var(--start-color) 2px 1px 3px;
          }

          .blue2orange {
            color: white;

            --start-color: #15aabf;
            --end-color: orange;

            border: transparent;
            background: linear-gradient(
              105deg,
              var(--start-color) 0%,
              #e64980 50%,
              var(--end-color) 100%
            );
            box-shadow: var(--end-color) 2px 1px 3px;
          }
          .blue2orange:hover {
            --end-color: orange;
            box-shadow: var(--end-color) 0px 0px 0px;
          }
        `}
      </style>
    </>
  );
};

export default memo(JbButtons);
