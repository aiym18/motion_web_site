"use client";
import { FC, useState } from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id={s.header}>
      <div className="container">
        <div className={s.header}>
          <h1>Logo</h1>
          <span className={s.burger_menu} onClick={toggleMobileMenu}>
            <IoIosMenu />
          </span>
          <nav>
            <Link href="/">Главная</Link>
            <Link href="/usAbout">О нас</Link>
            <Link href="/courses">Курсы</Link>
            <Link href="#">Контакты</Link>
          </nav>
          <div className={s.header_btns}>
            <Link href={"#"}>Войти</Link>
            <button>
              Присоединяйся <FaArrowRight />
            </button>
          </div>
        </div>
        <div className={`${s.header_mobile} ${isMobileMenuOpen ? s.open : ""}`}>
          <span className={s.burger_menu} onClick={toggleMobileMenu}>
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
      </div>
    </header>
  );
};

export default Header;
