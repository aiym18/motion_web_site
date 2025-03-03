import { FC } from "react";
import scss from "./Setting.module.scss";

const Setting: FC = () => {
 return (
  <section className={scss.Setting}>
   <div className="container">
    <div className={scss.content}>Setting</div>
   </div>
  </section>
 );
};

export default Setting;
