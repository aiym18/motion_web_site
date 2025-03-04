import React from "react";
import s from "./Payment.module.scss";
import Image from "next/image";
import img1 from "@/assets/img/visa 1.png";
import img2 from "@/assets/img/credit-card 1.png";
import img3 from "@/assets/img/american-express.png";
import img4 from "@/assets/img/discover.png";

const Payment = () => {
  return (
    <section>
      <div className="container">
        <h1>Безопасная оплата</h1>
      </div>
      <div className={s.card}>
        <div className="container">
          <h1>КРЕДИТНАЯ / ДЕБЕТОВАЯ КАРТА</h1>
          <div className={s.cards}>
            <Image src={img1} alt="img" />
            <Image src={img2} alt="img" />
            <Image src={img3} alt="img" />
            <Image src={img4} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
