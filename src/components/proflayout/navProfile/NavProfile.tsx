"use client";
import { FC } from "react";
import scss from "./NavProfile.module.scss";
import { HiUser } from "react-icons/hi2";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavProfile: FC = () => {
  const router = useRouter();
  return (
    <section className={scss.NavProfile}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <span onClick={() => router.push("/profil/")}>
              <HiUser />
              <Link href="/profil/">Профиль</Link>
            </span>
            <span onClick={() => router.push("/profil/chat")}>
              <IoChatboxEllipses />
              <Link href="/profil/chat">Чат</Link>
            </span>
            <span onClick={() => router.push("/profil/course")}>
              <FaEnvelope />
              <Link href="/profil/course">Курсы</Link>
            </span>
            <span onClick={() => router.push("/profil/evaluate")}>
              <FaStar />
              <Link href="/profil/evaluate">Оценить</Link>
            </span>
            <span onClick={() => router.push("/profil/settin")}>
              <IoSettingsSharp />

              <Link href="/profil/settin">Настройки</Link>
            </span>
          </div>
          <div className={scss.help}>
            <span onClick={() => router.push("#")}>
              <MdHelp />
              <a href="#">Помощь</a>
            </span>
            <span onClick={() => router.push("/")}>
              <CiLogout />
              <Link href="/">Выйти</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavProfile;
