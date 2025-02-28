"use client";
import { FC, useState } from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header id={s.header}>
      <div className="container">
        <div className={s.header}>
          <h1>Logo</h1>
          <span className={s.burger_menu} onClick={() => setOpenModal(true)}>
            <IoIosMenu />
          </span>
          <nav>
            <Link href="#">Главная</Link>
            <Link href="#">О нас</Link>
            <Link href="#">Курсы</Link>
            <Link href="#">Контакты</Link>
          </nav>
          <div className={s.header_btns}>
            <Link href={"#"}>Войти</Link>
            <button>
              Присоединяйся <FaArrowRight />
            </button>
          </div>
        </div>
        {openModal && (
          <div className={`${s.header_mobile} ${openModal ? s.active : ""}`}>
            <span className={s.burger_menu} onClick={() => setOpenModal(false)}>
              <IoClose />
            </span>
            <nav>
              <Link href="#">Главная</Link>
              <Link href="#">О нас</Link>
              <Link href="#">Курсы</Link>
              <Link href="#">Контакты</Link>
            </nav>
            <div className={s.header_btns}>
              <Link href={"#"}>Войти</Link>
              <button>
                Присоединяйся <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
