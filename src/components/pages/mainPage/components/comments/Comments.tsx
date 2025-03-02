import React from "react";
import s from "./Comments.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Comment from "@/ui/comment/Comment";

const Comments = () => {
  return (
    <section id={s.comments}>
      <div className="container">
        <div className={s.comments}>
          <h1>Нам доверяют тысячи довольных учеников</h1>
          <p>
            Мы предоставляем множество функций, которые вы можете использовать.
            Постепенное накопление информация{" "}
          </p>
          <div className={s.swiper}>
            <div className={s.cards}>
              <Comment />
              <Comment />
              <Comment />
            </div>
            <div className={s.conductor}>
              <div className={s.count}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={s.arrows}>
                <div className={s.circle}>
                  <FaArrowLeft />
                </div>
                <div className={s.circle}>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
