import React from "react";
import s from "./Card.module.scss";
import img from "@/assets/img/card-img.png";
import Image from "next/image";
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { GiProgression } from "react-icons/gi";

const Card = () => {
  return (
    <div id={s.card}>
      <div className={s.card_img}>
        <Image src={img} alt="img" />
        <span>Бесплатно</span>
        <div className={s.like}>
          <IoMdHeartEmpty />
        </div>
      </div>
      <div className={s.card_text}>
        <h4>Как ставить о оценивать задачи</h4>
        <p>
          Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь
          нажатие клавиши.
        </p>
        <div className={s.info}>
          <div className={s.time + " " + s.full}>
            <MdOutlineAccessAlarm />
            <h6>22ч 30мин</h6>
          </div>
          <div className={s.lessons + " " + s.full}>
            <LuChartNoAxesCombined />
            <h6>64 уроков</h6>
          </div>
          <div className={s.progress + " " + s.full}>
            <GiProgression />
            <h6>Прогресс</h6>
          </div>
        </div>
        <button>
          Узнать больше <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Card;
