import { NextPage } from "next";
import {
  createElement,
  FC,
  memo,
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface IRoute {
  path?: string;
  name: string;

  hide?: boolean;
  routes?: IRoute[];
}

let routes: IRoute[] = [
  {
    name: "组件",
    routes: [
      {
        name: "Form",
        routes: [
          {
            name: "基础表单",
            path: "/form/basic",
          },
          {
            name: "可收缩表单",
            path: "/form/collapse",
          },
        ],
      },
      {
        name: "Table",
        routes: [
          {
            name: "基础表格",
            path: "/table/basic",
          },
          {
            name: "树形表格",
            path: "/table/tree",
          },
        ],
      },
      {
        name: "动画组件",
        path: "/animation",
      },
    ],
  },
  {
    name: "功能",
    routes: [
      {
        name: "图标",
        path: "/icon",
      },
      {
        name: "面包屑导航",
        routes: [
          {
            name: "基础",
            path: "/breadcrumb/basic",
          },
        ],
      },
    ],
  },
  {
    name: "图形编辑器",
    routes: [
      {
        name: "流程图",
        path: "/flow",
      },
    ],
  },
];

let CollapsePlane: FC<{
  title: string;
  titleStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}> = (props) => {
  const [checked, setChecked] = useState<boolean>(false);

  const allOpen = useContext(AllOpenContext);

  useEffect(() => {
    setChecked(allOpen);
  }, [allOpen]);

  return (
    <>
      <div className="p-0 ">
        <div className="w-full collapse collapse-arrow bg-base-100 ">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <div
            className="text-xl font-medium text-black collapse-title"
            style={props.titleStyle}
          >
            {props.title}
          </div>
          <div
            className="p-0 text-black collapse-content"
            style={props.contentStyle}
          >
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

let MenuItem: FC<{
  titleStyle: React.CSSProperties;
}> = (props) => {
  return (
    <>
      <div
        style={props.titleStyle}
        onClick={() => console.log("被点击了.")}
        className="w-full p-4 pr-12 text-xl font-medium text-black hover:bg-blue-400"
      >
        {props.children}
      </div>
    </>
  );
};

let AllOpenContext = createContext(false);

let level = 0;
let RenderMenu = (
  route: IRoute | IRoute[],
  isFirstRun: boolean = false
): React.ReactNode => {
  const [allOpenState, setAllOpenState] = useState<boolean>(false);

  if (Array.isArray(route)) {
    if (isFirstRun) {
      return (
        <>
          <AllOpenContext.Provider value={allOpenState}>
            <button
              className="btn btn-outline"
              onClick={() => setAllOpenState(!allOpenState)}
            >
              {allOpenState ? "全部收起" : "全部展开"}
            </button>
            {route.map((item, index) => {
              level = 0;
              return <li key={index}>{RenderMenu(item)}</li>;
            })}
          </AllOpenContext.Provider>
        </>
      );
    }

    return route.map((item, index) => {
      level++;

      //@ts-ignore
      return cloneElement(RenderMenu(item), {
        key: index,
      });
    });
  } else {
    let node = <></>;

    let style = { paddingLeft: level * 20 + "px" };
    if (route.routes) {
      node = (
        <>
          <CollapsePlane title={route.name} titleStyle={style}>
            {RenderMenu(route.routes)}
          </CollapsePlane>
        </>
      );
    } else {
      node = (
        <>
          <MenuItem titleStyle={style}>{route.name}</MenuItem>
        </>
      );
    }

    level--;

    return node;
  }
};

let Five: NextPage = function () {
  return (
    <>
      <div className="flex h-screen ">
        <div className="flex-shrink-0 overflow-y-scroll bg-red-400 w-52">
          {/* 左侧菜单 */}
          <ul className="menu bg-base-100">{RenderMenu(routes, true)}</ul>
          {/* 左侧菜单结束 */}
        </div>
        <div className="w-full p-5 bg-yellow-500">这只是一个做了一半的demo,完整的侧边栏菜单在 solid hope admin</div>
      </div>
    </>
  );
};

export default memo(Five);
