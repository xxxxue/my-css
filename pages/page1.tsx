import { NextPage } from "next";
import { memo, useRef } from "react";
import { BadgeCheckIcon, MenuIcon } from "@heroicons/react/outline";
interface IProp {}

let One: NextPage<IProp> = function (props) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  let toggleSiderbar = () => {
    sidebarRef.current?.classList.toggle("-translate-x-full");
  };

  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menubar */}
      <div
        className="flex justify-between 
            bg-gray-800 text-gray-100 md:hidden"
      >
        <a href="" className="block p-4 font-bold text-white">
          Better Dev
        </a>
        <button
          onClick={toggleSiderbar}
          className="p-4 focus:bg-gray-700 focus:outline-none"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {/* sidebar */}
      <div
        ref={sidebarRef}
        className="absolute inset-y-0 left-0 w-64 
            -translate-x-full transform space-y-6 bg-blue-800 
            px-2 py-7 text-blue-100 transition 
            duration-200 ease-in-out md:relative md:translate-x-0"
      >
        {/* logo */}

        <a href="#" className=" flex items-center space-x-2 px-4 text-white">
          <BadgeCheckIcon className="h-8 w-8" />

          <span className="text-2xl font-extrabold">Better Dev</span>
        </a>
        {/* nav */}
        <nav>
          <a
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Features
          </a>
          <a
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Pricing
          </a>
        </nav>
      </div>

      {/* content
            
                flex-1 让内容占满空间
            */}

      <div className=" flex-1 overflow-y-scroll p-10 text-2xl font-bold">
        content goes here
      </div>
    </div>
  );
};

export default memo(One);
