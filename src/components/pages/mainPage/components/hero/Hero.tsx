import React from "react";
import s from "./Hero.module.scss";
import img from "@/assets/img/hero1-img.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section id={s.hero}>
      <div className="container">
        <div className={s.hero}>
          <div className={s.hero_text}>
            <h1>Надо много учиться, чтобы знать хоть немного.</h1>
            <p>
              Обеспечьте сеть для всех ваших потребностей легко и весело,
              используя наши курсы.Откройте для себя интересные функции от нас.
            </p>
            <button>Начать</button>
          </div>
          <Image src={img} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
