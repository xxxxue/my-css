import classNames from "classnames";
import { NextPage } from "next";
import { memo, useState } from "react";

interface IProp {}
let Three: NextPage<IProp> = function (props) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  return (
    <>
      <div className="h-screen bg-yellow-400">
        <div className="flex h-full">
          {/* 占位元素 */}
          <div
            className={classNames(
              " flex-shrink-0 transform bg-lime-400 duration-200",
              sidebarOpen ? "w-52" : "w-0"
            )}
          />

          {/* 侧边栏 */}
          <div
            className={classNames(
              "fixed top-0 bottom-0 left-0 w-52 transform overflow-y-scroll bg-orange-500 duration-200",
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            侧边栏
          </div>

          {/* 右侧内容 */}
          <div className="flex h-full w-full flex-col bg-blue-400">
            {/* 顶部 */}
            <div className="flex h-10 items-center justify-between bg-yellow-300">
              <div>
                <button
                  className="bg-red-400"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  click
                </button>
              </div>
              <div>头像名字</div>
            </div>
            {/* 内容 */}
            <div className="h-full overflow-y-scroll bg-lime-300 p-5 ">
              内容
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Three);
