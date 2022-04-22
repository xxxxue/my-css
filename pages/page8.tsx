import classNames from "classnames";
import { NextPage } from "next";
import { memo, useEffect, useRef, useState } from "react";

/** 判断某个元素是否在屏幕上 */
function IsInViewPortOfOne(el: HTMLElement) {
  // viewPortHeight 兼容所有浏览器写法
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const offsetTop = el.offsetTop;
  const scrollTop = document.documentElement.scrollTop;
  const top = offsetTop - scrollTop;
  return top <= viewPortHeight;
}

interface IProps {}
// https://meticulous.ai/blog/fetch-vs-axios/
let Page8: NextPage<IProps> = function () {
  const readMoreRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    let onScroll = () => {
      let res = IsInViewPortOfOne(readMoreRef.current!);
      if (res != open) {
        setOpen((s) => !s);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  return (
    <>
      <div className="h-full w-full bg-white ">
        <div
          className={classNames(
            " sticky top-0 z-10 flex h-24 transform items-center justify-between border-b bg-white/95 px-4 shadow-lg shadow-[rgba(0,0,0,0.07)] duration-700",
            open ? "invisible opacity-0" : "visible opacity-100"
          )}
        >
          <div className="">logo</div>
          <div className="flex h-full items-center space-x-3">
            <div className=" group flex h-full items-center">
              <span className="group-hover:animate-bounce">Demo</span>
            </div>
            <div>Pricing</div>
            <div>Docs</div>
            <div>FAQ</div>
            <div>Careers</div>
            <div>Blog</div>
            <div>Sign Up</div>
          </div>
        </div>
        <div className="bg-[#4D61FC]">
          <div
            className={classNames(
              "h-full w-full bg-white p-10 text-center shadow-2xl shadow-black/40 duration-700 ease-in-out",
              open ? "scale-90 rounded-2xl" : "scale-100 rounded-none"
            )}
          >
            <p className="text-2xl font-bold">往下滚动</p>
            {[...new Array(50)].map((_, index) => {
              return (
                <>
                  <p key={index}>{index}</p>
                </>
              );
            })}
          </div>
          <div ref={readMoreRef} className="h-full w-full px-8 text-white">
            <p className="text-3xl">Read more</p>
            <div>
              {[...new Array(20)].map((_, index) => {
                return (
                  <>
                    <p key={index}>{index}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Page8);
