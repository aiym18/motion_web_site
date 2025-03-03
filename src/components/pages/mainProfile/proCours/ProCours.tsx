import { FC } from "react";
import scss from "./ProCours.module.scss";

const ProCours: FC = () => {
 return (
  <section className={scss.ProCours}>
   <div className="container">
    <div className={scss.content}>ProCours</div>
   </div>
  </section>
 );
};

export default ProCours;
