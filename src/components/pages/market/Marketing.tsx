"use client";
import { FC, useState } from "react";
import scss from "./Marketing.module.scss";
import market from "@/assets/img/market.png";
import Image from "next/image";
import JoinUs from "../mainPage/components/join_us/JoinUs";
import lessonImage from "@/assets/img/Frame 427319274.png";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Marketing: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lessons = [
    {
      id: 1,
      title: "Как ставить о оценивать задачи",
      duration: "1 ч. 23м.",
      locked: false,
    },
    {
      id: 2,
      title: "Как ставить о оценивать задачи",
      duration: "1 ч. 23м.",
      locked: true,
    },
    {
      id: 3,
      title: "Как ставить о оценивать задачи",
      duration: "1 ч. 23м.",
      locked: true,
    },
  ];
  return (
    <section className={scss.Marketing}>
      <div className="container">
        <div className={scss.content}>
          <h1>Маркетинг</h1>
          <p>
            Мы предоставляем множество функций, которые вы можете <br />{" "}
            использовать. Постепенное накопление информация{" "}
          </p>
          <div className={scss.forMarket}>
            <Image src={market} alt="img" />
            <div className={scss.tex}>
              <h2>Как ставить о оценивать задачи</h2>
              <p>
                Прежде чем разбирать бизнес-кейсы, стоит поговорить об основах
                финансовой грамотности. На вопрос, как сохранить деньги,
                Маргулан Калиевич предлагает несколько стратегий:
              </p>
              <p>
                <span>Фиксированный налог </span>на будущее и безопасность. С
                каждого своего дохода откладывайте по 10% на будущее и на
                безопасность. Прелесть этой стратегии в том, что она подходит
                как длялюдей с доходом 500$, так и для людей с доходом 500 000$.
              </p>
              <p>
                <span>Прогрессивный налог </span> на будущее. Суть метода в том,
                что вы откладываете не 10%, а столько, сколько вам лет.
                Например, если вам 30, то и налог — 30%. Это могут позволить уже
                не все, зато для обладателей больших доходов такой подход более
                уместен, ведь он лучше страхует от рисков, связанных с
                предпринимательской деятельностью.
              </p>
              <p>
                Регрессивный налог на будущее. В данном случае вы откладываете
                не такой процент, сколько вам лет, а процент, равный вычитанию
                возраста из 100. То есть если вам 30, то откладывайте 70%
                дохода. Очевидно, этот способ подойдёт только для тех, лишь
                малая доля дохода которых уже обеспечивает комфорт. Зато это
                неплохой задел на раннюю пенсию и безбедное детство детей.
              </p>
            </div>
          </div>
          <p>
            Хранить эти деньги стоит диверсифицированно. 10% сбережений
            оставляйте в национальной валюте вашей страны. 90 % распределите на
            3 валюты: швейцарский франк, норвежская крона, и что-то из:
            американского доллара, евро либо йены. Рассмотрите варианты
            сбережений вгосударственных бумагах, фиксированных к инфляции.Эти
            рекомендации касаются личного бюджета. Ниже мы рассмотрим основные
            финансовые рискив бизнесе и стратегии управления ими.
          </p>

          <div className={scss.lesson}>
            <div className={scss.lessons}>
              <div
                className={scss.lessonHeader}
                onClick={() => setIsOpen(!isOpen)}
              >
                <h2>Урок 1: Ознакомление</h2>
                <button className={scss.toggleButton}>
                  {isOpen ? <SlArrowDown /> : <SlArrowUp />}
                </button>
              </div>

              {isOpen && (
                <div className={scss.lessonsGrid}>
                  {lessons.map((lesson) => (
                    <div key={lesson.id} className={scss.lessonCard}>
                      <div className={scss.imageWrapper}>
                        <Image src={lessonImage} alt="Урок" />
                      </div>
                      <p className={scss.duration}>{lesson.duration}</p>
                      <p>{lesson.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <JoinUs />
        </div>
      </div>
    </section>
  );
};

export default Marketing;
