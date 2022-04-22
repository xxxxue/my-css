import { FC, memo } from "react";

interface IProps {
  desc: string;
  name: string;
  fullName: string;
  headImgPath: string;
}
let Card: FC<IProps> = function (props) {
  return (
    <>
      <div className="card">
        <div className="photo">
          <img src={props.headImgPath} alt="" />
        </div>
        <h1>{props.name}</h1>
        <h2>{props.fullName}</h2>
        <p>{props.desc}</p>
        <a href="#">了解更多</a>
      </div>
      <style jsx>
        {`
          .card {
            /* 相对定位 */
            position: relative;
            width: 300px;
            height: 470px;
            margin: 20px;
            background-color: #758a99;
            border-radius: 20px;
            /* 溢出隐藏 */
            overflow: hidden;
            /* 弹性布局 */
            display: flex;
            /* 元素纵向排列 */
            flex-direction: column;
            /* 居中 */
            align-items: center;
            color: #fff;
            /* 阴影 */
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
            /* 不让其他被挤压 */
            flex-shrink: 0;
          }
          .card .photo img {
            width: 100%;
            height: 100%;
            /* 保持原有尺寸比例,裁切长边 */
            object-fit: cover;
          }

          /* 默认大图 */
          .card .photo {
            /* 绝对定位 */
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 0%;
            overflow: hidden;
            /* 动画过渡 */
            transition: 0.5s;
          }

          /* 鼠标移入变小图 */
          .card:hover .photo {
            top: 30px;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
          }

          /* 这里加个黑色到透明的渐变背景，可以更好的看清楚名字 */
          .card .photo::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 50%, #222);
          }

          .card h1 {
            position: absolute;
            top: 370px;
            transition: 0.5s;
          }

          .card:hover h1 {
            top: 170px;
          }

          .card h2 {
            margin-top: 220px;
            width: 80%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            font-size: 20px;
            text-align: center;
            margin-bottom: 20px;
            padding-bottom: 20px;
          }

          .card p {
            width: 90%;
            text-indent: 32px;
            font-size: 16px;
            margin-bottom: 15px;
            line-height: 30px;
          }

          .card a {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            border: 1px solid rgba(255, 255, 255, 0.5);
            padding: 8px 32px;
            border-radius: 8px;
          }
          .card a:hover {
            color: #fff;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
    </>
  );
};

let UserCard = function () {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-bl from-[#517fa4] to-[#243949] md:flex-row ">
        <Card
          name="艾斯"
          fullName='"火拳"艾斯'
          headImgPath="/images/a.jpeg"
          desc="波特卡斯·D·艾斯，日本漫画《航海王》及其衍生作品中的角色。萨博与路飞的结义兄弟。"
        />

        <Card
          name="萨博"
          fullName="革命军二把手"
          headImgPath="/images/s.jpeg"
          desc="萨博，日本漫画《航海王》及其衍生作品中的角色。是路飞与艾斯的结义兄弟。"
        />

        <Card
          name="路飞"
          fullName="草帽小子"
          headImgPath="/images/l.jpeg"
          desc="蒙奇·D·路飞，日本漫画《航海王》及其衍生作品中的男主角。是草帽海贼团的船长。"
        />
      </div>
      <style jsx>{`
       
      `}</style>
    </>
  );
};

export default memo(UserCard);
