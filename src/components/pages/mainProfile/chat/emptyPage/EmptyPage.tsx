import React from "react";
import s from "./EmptyPage.module.scss";
import { CiSearch } from "react-icons/ci";

const EmptyPage = () => {
  return (
    <div id={s.empty}>
      <span>
        <CiSearch />
      </span>
      <h2>
        Отправляйте и получайте сообщения без необходимости оставлять телефон
        подключённым.
      </h2>
      <p>
        Используйте Chat одновременно на четырёх связанных устройствах и одном
        телефоне.
      </p>
    </div>
  );
};

export default EmptyPage;
