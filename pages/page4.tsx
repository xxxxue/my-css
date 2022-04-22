import classNames from "classnames";
import { NextPage } from "next";
import React, {
  createContext,
  FC,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";

// 手风琴效果 核心点:
// max-h-0 最大高度.
// overflow-hidden 溢出的内容直接隐藏

let MyComponent: FC<{ className?: string }> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const allOpen = useContext(allOpenContext);

  useEffect(() => {
    setOpen(allOpen);
  }, [allOpen]);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="btn btn-outline w-full">
        点我
      </button>
      <div
        className={classNames(
          props.className,
          "ml-3 overflow-hidden ",
          "transform duration-200 ease-in-out",
          open ? "max-h-[60rem]" : "max-h-0"
        )}
      >
        {props.children}
      </div>
    </>
  );
};

let allOpenContext = createContext(false);

interface IProps {}
let Four: NextPage<IProps> = (props) => {
  const [allOpenState, setAllOpenState] = useState<boolean>(false);

  return (
    <div className="flex flex-col  p-3">
      <button
        className="btn btn-outline mb-2"
        onClick={() => setAllOpenState(!allOpenState)}
      >
        {allOpenState ? "关闭所有" : "展开所有"}
      </button>

      <allOpenContext.Provider value={allOpenState}>
        <MyComponent className="bg-blue-300">
          <MyComponent className="bg-yellow-200">
            <MyComponent className="bg-red-200">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
            </MyComponent>
          </MyComponent>
        </MyComponent>
      </allOpenContext.Provider>
    </div>
  );
};

export default memo(Four);
