import { FC } from "react";
import scss from "./HomeProfile.module.scss";

const HomeProfile: FC = () => {
 return (
  <section className={scss.HomeProfile}>
   <div className="container">
    <div className={scss.content}>HomeProfile</div>
   </div>
  </section>
 );
};

export default HomeProfile;
