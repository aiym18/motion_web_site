import React from "react";
import s from "./JoinUs.module.scss";

const JoinUs = () => {
  return (
    <section id={s.join}>
      <div className="container">
        <div className={s.join}>
          <h1>Присоединяйся к нам</h1>
          <p>
            Мы предоставляем множество функций, которые вы можете использовать.
            Постепенное накопление информация{" "}
          </p>
          <div className={s.form}>
            <input type="text" placeholder="Твой Email" />
            <button>Подписка</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
