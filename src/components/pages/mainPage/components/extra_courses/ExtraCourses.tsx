import React from "react";
import s from "./ExtraCourses.module.scss";
import Card from "@/ui/card/Card";

const ExtraCourses = () => {
  return (
    <section id={s.extra}>
      <div className="container">
        <div className={s.extra}>
          <h1>Доступные курсы</h1>
          <p>
            Мы предоставляем множество функций, которые вы можете использовать.
            Постепенное накопление информация{" "}
          </p>
          <div className={s.cards}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCourses;
