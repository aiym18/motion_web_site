"use client";
import React from "react";
import s from "./JoinUs.module.scss";
import { useRouter } from "next/navigation";

const JoinUs = () => {
  const router = useRouter();
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
            <button onClick={() => router.push("/paid_marketing")}>
              Подписка
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
