import {
  ArrowDownIcon,
  ArrowLeftIcon,
  BellIcon,
  BookOpenIcon,
  CakeIcon,
  CogIcon,
  CollectionIcon,
  CurrencyDollarIcon,
  DesktopComputerIcon,
  DocumentDuplicateIcon,
  FireIcon,
  MenuIcon,
  SearchIcon,
  ViewBoardsIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import { NextPage } from "next";
import { memo, useState } from "react";

let Item = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <li className="sidebarMenuButtonBox">
        <div
          onClick={() => setOpen(!open)}
          collapse-control="content2"
          className="relative flex justify-between text-gray-200 focus-within:text-white hover:text-white"
        >
          <div className="flex items-center w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <BookOpenIcon
                className="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              />
            </div>
            <a href="#" className="sidebarMenuButton">
              内容2
            </a>
          </div>
          <button className="absolute right-0 flex items-center p-1">
            <ArrowDownIcon className="w-5 h-5 stroke-current" />
          </button>
        </div>
        <div
          className={classNames(
            "transform overflow-hidden pt-2 pl-4 duration-200 ease-in-out",
            open ? "max-h-96" : "max-h-0"
          )}
          collapse-control-panel="content2"
        >
          <ul className="flex flex-col pl-2 text-gray-200 border-l border-gray-700">
            <li>
              <a className="sidebarMenuCollapseA" href="#">
                培训班
              </a>
            </li>
            <li>
              <a className="sidebarMenuCollapseA" href="#">
                类别
              </a>
            </li>
            <li>
              <a className="sidebarMenuCollapseA" href="#">
                讲师
              </a>
            </li>
            <li>
              <a className="sidebarMenuCollapseA" href="#">
                视频
              </a>
            </li>
          </ul>
        </div>
      </li>
      <style jsx>
        {`
          .sidebarMenuButtonBox {
            @apply relative text-gray-200 focus-within:text-white hover:text-white;
          }

          .sidebarMenuButton {
            @apply inline-block w-full rounded border-2 border-purple-400 
                        border-opacity-0  py-2 pl-8 pr-4 text-xs shadow-lg 
                        hover:border-orange-400  hover:text-white focus:bg-gray-800 
                        focus:outline-none focus:ring-2 focus:ring-blue-500;
          }

          .sidebarMenuCollapseA {
            @apply mr-2 inline-block w-full rounded px-4 py-2 text-xs 
                        hover:bg-gray-800 hover:text-white focus:text-white focus:outline-none 
                        focus:ring-1 focus:ring-blue-500;
          }
        `}
      </style>
    </>
  );
};

interface IProp {}
let Two: NextPage<IProp> = function () {
  const [sidebarState, setSidebarState] = useState<boolean>(true);

  let toggleSiderbar = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <>
      <div className="relative max-h-screen min-h-screen md:flex">
        {/* sidebar */}
        <div
          className={classNames("sidebar", {
            "-translate-x-full": sidebarState,
          })}
        >
          {/* 头部 */}
          <div>
            <div className="px-6 pt-8">
              <div className="flex items-center justify-between ">
                <div className="flex space-x-2 animate-bounce">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded bg-blue-600 p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <DesktopComputerIcon className="w-5 h-5 text-white stroke-current" />
                  </a>
                  <div className="self-center text-white ">Better Dev</div>
                </div>
                <button
                  onClick={toggleSiderbar}
                  className="flex items-center justify-center rounded bg-gray-800 p-0.5 focus:outline-none focus:ring-1 focus:ring-gray-500 md:hidden"
                >
                  <ArrowLeftIcon className="w-3 h-3 text-gray-300 stroke-current" />
                </button>
              </div>
            </div>
            {/* 搜索 */}
            <div className="px-6 pt-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <SearchIcon className="w-4 h-4 text-gray-200 stroke-current" />
                </div>
                <input
                  type="text"
                  className="searchInput"
                  placeholder="search"
                />
              </div>
            </div>
            <div className="px-6 pt-4">
              <hr className="border-gray-700" />
            </div>
          </div>
          {/* 中间树形菜单 */}
          <div className="flex-1 overflow-y-scroll scrollbar-hide">
            <div className="px-6 pt-4">
              <ul className="flex flex-col space-y-2">
                <li className="sidebarMenuButtonBox">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <ViewBoardsIcon
                      className="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    />
                  </div>
                  <a href="#" className="sidebarMenuButton">
                    仪表盘
                  </a>
                </li>
                {/* 带展开的子项 */}
                <Item />
                <Item />
                <li className="sidebarMenuButtonBox">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <DocumentDuplicateIcon
                      className="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    />
                  </div>
                  <a href="#" className="sidebarMenuButton">
                    设计
                  </a>
                </li>
                <li className="sidebarMenuButtonBox">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <CakeIcon className="w-5 h-5 stroke-current" />
                  </div>
                  <a href="#" className="sidebarMenuButton">
                    营销&销售
                  </a>
                </li>
                <li className="sidebarMenuButtonBox">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <CollectionIcon
                      className="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    />
                  </div>
                  <a href="#" className="sidebarMenuButton">
                    报告
                  </a>
                </li>
                <li className="sidebarMenuButtonBox">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <CurrencyDollarIcon className="w-5 h-5 stroke-current" />
                  </div>
                  <a href="#" className="sidebarMenuButton">
                    支持
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-6 pt-8">
              <hr className="border-gray-700" />
            </div>
            <div className="px-6 pt-4 pb-8">
              <ul>
                <li className="sidebarMenuButtonBox">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <CogIcon className="w-5 h-5 stroke-current" />
                  </div>
                  <a href="#" className="sidebarMenuButton">
                    设置
                  </a>
                </li>
                <li className="sidebarMenuButtonBox">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <BellIcon className="w-5 h-5 stroke-current" />
                  </div>
                  <a href="#" className="sidebarMenuButton">
                    通知
                  </a>
                </li>
                <li className="sidebarMenuButtonBox">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <FireIcon className="w-5 h-5 stroke-current" />
                  </div>
                  <a href="#" className="sidebarMenuButton">
                    Apps
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 底部头像 */}
          <div className="flex items-center justify-between bg-[#232529] py-4 pl-6 pr-4">
            <div className="flex items-center">
              <div className={"userImageBox"}>
                {/* <Image
                  className='rounded-full'
                  src={userHeadImgPath}
                  alt=''
                  width={400}
                  height={400}
                /> */}
              </div>
              <div className="flex flex-col pl-3">
                <div className="text-sm text-gray-50">老菜鸟</div>
                <span className="text-xs font-light tracking-tight text-[#acacb0]">
                  1659809758@qq.com
                </span>
              </div>
            </div>
            <button className="text-gray-400 bg-gray-700 rounded focus:text-white focus:outline-none focus:ring-1 focus:ring-gray-500">
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.25 10.75L12 14.25L8.75 10.75"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* content

                    flex-1 让内容占满空间
                */}

        <div className="flex flex-col flex-1 max-h-screen min-h-screen">
          {/* mobile menubar */}
          <div className="mobileMenubar">
            <a href="" className="block p-4 font-bold text-white ">
              Better Dev
            </a>
            <button onClick={toggleSiderbar} className="p-4 md:hidden">
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-2 overflow-y-scroll font-bold ">
            <div className="flex flex-col space-y-4">
              content
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sidebar {
            @apply absolute inset-y-0 left-0 z-50 flex h-screen 
                        w-64 transform flex-col justify-between 
                        bg-gray-900 duration-200 ease-in-out md:relative md:translate-x-0;
          }

          .userImageBox {
            @apply relative h-8 w-8 rounded-full before:absolute before:right-0 
                        before:bottom-0 before:h-2 before:w-2 before:rounded-full 
                        before:bg-green-500 before:ring-1 before:ring-white;
          }

          .searchInput {
            @apply w-full rounded bg-gray-800 py-2.5 pl-8 pr-4 text-xs font-light 
                        text-yellow-50 placeholder-gray-500 focus:animate-pulse 
                        focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500;
          }

          .sidebarMenuButtonBox {
            @apply relative text-gray-200 focus-within:text-white hover:text-white;
          }

          .sidebarMenuButton {
            @apply inline-block w-full rounded border-2 border-purple-400 
                        border-opacity-0  py-2 pl-8 pr-4 text-xs shadow-lg 
                        hover:border-orange-400  hover:text-white focus:bg-gray-800 
                        focus:outline-none focus:ring-2 focus:ring-blue-500;
          }

          .sidebarMenuCollapseA {
            @apply mr-2 inline-block w-full rounded px-4 py-2 text-xs 
                        hover:bg-gray-800 hover:text-white focus:text-white focus:outline-none 
                        focus:ring-1 focus:ring-blue-500;
          }

          .mobileMenubar {
            @apply flex justify-between bg-gradient-to-r
                        from-purple-400 via-pink-500 to-red-500
                        bg-contain text-gray-100 transition-[background-position] 
                        duration-500 hover:bg-right md:hidden;

            background-size: 200%;
          }
        `}
      </style>
    </>
  );
};

export default memo(Two);
