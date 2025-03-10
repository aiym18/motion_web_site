import { FC } from "react";
import scss from "./ProCours.module.scss";
import Card from "@/ui/card/Card";

const ProCours: FC = () => {
  return (
    <section className={scss.ProCours}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.forbutton}>
            <button>Все курсы</button>
            <button>Управление компанией</button>
            <button>Командаобразование</button>
            <button>Маркетинг</button>
            <button>Продажи</button>
          </div>
          <div className={scss.forcard}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <h2>Смотреть больше</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCours;
