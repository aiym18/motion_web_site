"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import scss from "./AboutUs.module.scss";
import racket from "@/assets/img/racket.png";
import usimg1 from "@/assets/img/usimg1.png";
import usimg2 from "@/assets/img/usimg2.png";
import usimg3 from "@/assets/img/useing3.png";
import usimg4 from "@/assets/img/useimg4.png";
import boss from "@/assets/img/boss.png";
import Image from "next/image";

const AboutUs: FC = () => {
  return (
    <section className={scss.AboutUs}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.racket}>
            <p>
              Мы являемся топливом для вашего <br />
              бизнеса, готовы дать вам образование <br />и поднять ваш бренд до
              небес.
            </p>
            <div className={scss.forracet}>
              <motion.div
                className={scss.rak}
                animate={{
                  y: [0, -80, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image src={racket} alt="img" />
              </motion.div>
            </div>
          </div>
          <div className={scss.forImg}>
            <Image className={scss.usimgone} src={usimg1} alt="img" />
            <Image className={scss.usimgtwo} src={usimg2} alt="img" />
            <Image className={scss.usimgone} src={usimg3} alt="img" />
            <Image className={scss.usimgtwo} src={usimg4} alt="img" />
          </div>
          <div className={scss.weBoss}>
            <h2>Наш основатель</h2>
            <div className={scss.fortex}>
              <Image src={boss} alt="img" />
              <p>
                Большая история — новое исследовательское направление, в рамках
                которого изучается единый преемственный процесс развития
                Вселенной — с момента Большого взрыва до настоящего времени.
                Междисциплинарный проект The Big History Project был основан
                Биллом Гейтсом и Дэвидом Кристианом с целью разработки
                целостного курса истории космоса, Земли, жизни и человечества и
                преподавания его во всем мире.Эта книга, написанная на стыке
                естественных и гуманитарных наук — физики, геологии, астрономии,
                истории, .социологии и других, — насыщенное обобщение социологии
                и других, — насыщенное обобщение новейших научных представлений
              </p>
            </div>
            <p>
              Большая история — новое исследовательское направление, в рамках
              которого изучается единый преемственный процесс развития Вселенной
              — с момента Большого взрыва до настоящего времени.
              Междисциплинарный проект The Big History Project был основан
              Биллом Гейтсом и Дэвидом Кристианом с целью разработки целостного
              курса истории космоса, Земли, жизни и человечества и преподавания
              его во всем мире.Эта книга, написанная на стыке естественных и
              гуманитарных наук — физики, геологии, астрономии, истории, .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
