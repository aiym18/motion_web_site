import { FC } from "react";
import scss from "./Evaluate.module.scss";

const Evaluate: FC = () => {
 return (
  <section className={scss.Evaluate}>
   <div className="container">
    <div className={scss.content}>Evaluate</div>
   </div>
  </section>
 );
};

export default Evaluate;
