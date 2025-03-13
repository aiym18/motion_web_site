"use client";
import { FC, useState } from "react";
import scss from "./Evaluate.module.scss";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";

const Evaluate: FC = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0);

  return (
    <section className={scss.Evaluate}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.topevaluate}>
            <span onClick={() => router.push("/profil/")}> <IoMdClose /> </span>
            <h3>Как вам наш курс?</h3>
            <div className={scss.star}>
              {[1, 2, 3, 4, 5].map((star) => (
                <h4 key={star} onClick={() => setRating(star)}>
                  {star <= rating ? <IoIosStar color="gold" /> : <IoIosStarOutline />}
                </h4>
              ))}
            </div>
            <input type="text" placeholder="Комментарий......" />
            <button onClick={() => router.push("/profil/")}>Отправить</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluate;
