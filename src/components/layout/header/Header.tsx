"use client";
import { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import s from "./Header.module.scss";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useAuth } from "@/helpers/hooks/useAuth";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();

  if (pathname.startsWith("/auth")) return null;
  if (pathname.startsWith("/profil")) return null;

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
            <Link href={"/auth"}>Войти</Link>
            <button
              onClick={() => {
                login;
                router.push("/profil");
              }}
            >
              Присоединяйся <FaArrowRight />
            </button>
          </div>
        </div>
        <div className={`${s.header_mobile} ${isMobileMenuOpen ? s.open : ""}`}>
          <span className={s.burger_menu} onClick={toggleMobileMenu}>
            <IoClose />
          </span>
          <nav>
            <Link href="/">Главная</Link>
            <Link href="/usAbout">О нас</Link>
            <Link href="/courses">Курсы</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
          <div className={s.header_btns}>
            <Link href={"/auth/login"}>Войти</Link>
            <Link href={"/profil"}>
              <button>
                Присоединяйся <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
