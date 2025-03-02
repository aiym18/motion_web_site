"use client";
import { FC } from "react";
import scss from "./Cours.module.scss";
import Image from "next/image";
import cours from "@/assets/img/coursimg.png";
import Card from "@/ui/card/Card";

const Cours: FC = () => {
  return (
    <section className={scss.Cours}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <div className={scss.tex}>
              <h3>
                Развивайте свои навыки с <br />
                помощью онлайн-курсов <br /> с онлайн-обучением
              </h3>
              <button>Присоединиться</button>
            </div>
            <Image src={cours} alt="img" />
          </div>
          <div className={scss.popular}>
            <h1>Популярные курсы</h1>
            <p>
              Мы предоставляем множество функций, которые вы можете <br />
              использовать. Постепенное накопление информация{" "}
            </p>
            <div className={scss.forbutton}>
              <button>Все курсы</button>
              <button>Управление компанией</button>
              <button>Командаобразование</button>
              <button>Маркетинг</button>
              <button>Продажи</button>
            </div>
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

export default Cours;
