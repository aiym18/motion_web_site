import React from "react";
import { FaRegStar } from "react-icons/fa";
import s from "./Comment.module.scss";
import ava from "@/assets/img/avatar.png";
import Image from "next/image";

const Comment = () => {
  return (
    <div id={s.card}>
      <div className={s.card_title}>
        <div className={s.card_title_ava}>
          <Image src={ava} alt="img" />
          <div className="">
            <h5>Viezh Robert</h5>
            <h6>Shanxi, China</h6>
          </div>
        </div>
        <h4>
          4.5 <FaRegStar />
        </h4>
      </div>
      <p className={s.text}>
        «Вау… Я очень рад использовать этот VPN, он оказался больше, чем мои
        ожидания, и до сих пор не было никаких проблем. (Название) всегда
        лучший».
      </p>
    </div>
  );
};

export default Comment;
