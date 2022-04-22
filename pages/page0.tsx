import classNames from "classnames";
import { NextPage } from "next";
import { memo, useState } from "react";

let Six: NextPage = function () {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  return (
    <>
      <div className="h-screen w-screen bg-yellow-200 ">
        <div className="flex h-full w-full flex-col overflow-x-hidden">
          {/* head */}
          <div
            className="fixed left-0 top-0 right-0 flex h-[60px] 
          min-w-[580px] items-center justify-between bg-blue-200"
          >
            {/* logo */}
            <div className="flex space-x-3 pl-3">
              {/* logo */}

              <div className="hidden text-[20px] md:flex"> Admin</div>
              <button onClick={() => setOpenSidebar(!openSidebar)}>
                菜单按钮
              </button>
            </div>
            {/* logo end */}
            {/* right */}
            <div className="flex space-x-3 py-[14px] pr-4">
              <div>搜索框</div>

              <div>按钮</div>

              <div>按钮</div>

              <div>按钮</div>

              <div>按钮</div>

              <div>头像</div>
            </div>
            {/* right end */}
          </div>
          {/* head end */}

          {/* sidebar */}
          <div
            className={classNames(
              " fixed left-0 bottom-0 top-0 mt-[60px] flex transform bg-orange-300 transition-transform ",
              openSidebar ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {/* menu */}
            <div className="w-[250px]  overflow-y-auto overflow-x-hidden">
              菜单
            </div>
            {/* menu end */}
          </div>

          {/* sidebar end */}

          {/* content */}

          <div
            className={classNames(
              "flex h-full w-full bg-lime-300 pt-[60px] transition-[padding-left]",
              openSidebar ? "pl-[250px]" : "pl-0"
            )}
          >
            <div className="h-full w-full px-[20px]">
              <div className="hidden text-[10px] md:flex">
                面包屑 / 面包屑1 / 面包屑2
              </div>
              <div>content</div>
              <div className="flex items-center justify-center">Antd Admin</div>
            </div>
          </div>

          {/* content end */}
        </div>
      </div>
    </>
  );
};

export default memo(Six);
