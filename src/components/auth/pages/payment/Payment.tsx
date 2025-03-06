"use client";
import React, { useState } from "react";
import s from "./Payment.module.scss";
import Image from "next/image";
import img1 from "@/assets/img/visa 1.png";
import img2 from "@/assets/img/credit-card 1.png";
import img3 from "@/assets/img/american-express.png";
import img4 from "@/assets/img/discover.png";
import securety from "@/assets/img/securety.png";

const paymentOptions = [
  { id: "visa", label: "Visa/MasterCard / Amex /JCB", img: img1 },
  { id: "credit", label: "Credit Card Discover", img: img2 },
  { id: "amex", label: "American Express", img: img3 },
  { id: "discover", label: "Discover / Amex /JCB", img: img4 },
];

const Payment = () => {
  const [selected, setSelected] = useState(paymentOptions[0]);

  return (
    <section id={s.payment}>
      <div className="container">
        <h1 className={s.title}>
          <Image src={securety} alt="img" />
          Безопасная оплата
        </h1>
      </div>
      <div id={s.card_payment}>
        <div className="container">
          <div className={s.card_payment}>
            <h1>КРЕДИТНАЯ / ДЕБЕТОВАЯ КАРТА</h1>
            <div className={s.cards}>
              {paymentOptions.map((option) => (
                <Image key={option.id} src={option.img} alt={option.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={s.payment_way}>
          <h2>Выберите метод оплаты</h2>
          <div className={s.customSelect}>
            <div className={s.selectedOption}>
              <Image
                src={selected.img}
                alt={selected.label}
                width={30}
                height={20}
              />
              {selected.label}
            </div>
            <ul className={s.optionsList}>
              {paymentOptions.map((option) => (
                <li key={option.id} onClick={() => setSelected(option)}>
                  <Image
                    src={option.img}
                    alt={option.label}
                    width={30}
                    height={20}
                  />
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
