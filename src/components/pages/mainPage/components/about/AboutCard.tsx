import React from "react";
import s from "./AboutCard.module.scss";
import Image from "next/image";
import img1 from "@/assets/img/main-card1.png";
import img2 from "@/assets/img/main-card2.png";
import img3 from "@/assets/img/main-card3.png";
const AboutCard = () => {
  return (
    <section id={s.about}>
      <div className="container">
        <div className={s.about}>
          <div className={s.card}>
            <Image src={img1} alt="img" />
            <h3>Пожизненный доступ</h3>
            <hr />
            <p>
              Постепенное накопление информация об атомном и мелкомасштабное
              поведение...
            </p>
          </div>
          <div className={s.card}>
            <Image src={img2} alt="img" />
            <h3>Сертифицированный преподаватель</h3>
            <hr />
            <p>
              Постепенное накопление информация об атомном и мелкомасштабное
              поведение...
            </p>
          </div>
          <div className={s.card}>
            <Image src={img3} alt="img" />
            <h3>Обучающие курсы</h3>
            <hr />
            <p>
              Постепенное накопление информация об атомном и мелкомасштабное
              поведение...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
