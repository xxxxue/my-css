import { FC, memo } from "react";

let ColorButtons: FC = function () {
  return (
    <>
      <div className="myBtn" style={{ width: "100px", height: "50px" }}>
        <div>Button</div>
      </div>
      <button className="myBtn2">click</button>

      <style jsx>
        {`
          .myBtn {
            @apply inline-block cursor-pointer  rounded-lg;

            background-image: linear-gradient(
              90deg,
              #00c0ff 0%,
              #ffcf00 49%,
              #fc4f4f 100%
            );
          }
          .myBtn:active {
            transform: translateY(1px);
          }

          .myBtn div {
            @apply flex h-full
            w-full  transform items-center 
            justify-center rounded-md  bg-[#00000069]
            text-white duration-1000 hover:bg-[#ec61ce69];
          }

          .myBtn2 {
            width: 100px;
            height: 50px;
            border: 3px solid #ddd;
            border-image: linear-gradient(#f80, #2ed) 20 20;
          }

          .myBtn2:active {
            transform: translateY(1px);
          }
        `}
      </style>
    </>
  );
};

export default memo(ColorButtons);
