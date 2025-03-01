import React from "react";
import s from "./Why.module.scss";
import Image from "next/image";
import img1 from "@/assets/img/assignmen.png";
import img2 from "@/assets/img/microphon.png";
import img3 from "@/assets/img/support.png";
const Why = () => {
  return (
    <section id={s.why}>
      <div className="container">
        <div className={s.why}>
          <div className={s.title}>
            <h2>Почему (название кур.)</h2>
            <p>
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информация{" "}
            </p>
            <h1>100+</h1>
            <p>
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информация
            </p>
            <h1>80+</h1>
            <p>
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информация
            </p>
          </div>
          <div className={s.info}>
            <div className={s.block}>
              <Image src={img1} alt="img" />
              <div className={s.block_text}>
                <h4>Личное обучение</h4>
                <p>
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
            <div className={s.block}>
              <Image src={img2} alt="img" />
              <div className={s.block_text}>
                <h4>Интерактивные уроки</h4>
                <p>
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
            <div className={s.block}>
              <Image src={img3} alt="img" />
              <div className={s.block_text}>
                <h4>24/7 Поддержка учеников</h4>
                <p>
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
