"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import scss from "./AboutUs.module.scss";
import racket from "@/assets/img/racket.png";
import usimg1 from "@/assets/img/usimg1.png";
import usimg2 from "@/assets/img/usimg2.png";
import usimg3 from "@/assets/img/useing3.png";
import usimg4 from "@/assets/img/useimg4.png";
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
            <h2></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
