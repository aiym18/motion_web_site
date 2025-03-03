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

const NavProfile: FC = () => {
  return (
    <section className={scss.NavProfile}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <span>
              <HiUser />
              <Link href="/profil">Профиль</Link>
            </span>
            <span>
              <IoChatboxEllipses />
              <Link href="/profil/chat">Чат</Link>
            </span>
            <span>
              <FaEnvelope />
              <Link href="/profil/course">Курсы</Link>
            </span>
            <span>
              <FaStar />
              <a href="/profil/evaluate">Оценить</a>
            </span>
            <span>
              <IoSettingsSharp />

              <a href="profil/settin">Настройки</a>
            </span>
          </div>
          <div className={scss.help}>
            <span>
              <MdHelp />
              <a href="#">Помощь</a>
            </span>
            <span>
              <CiLogout />
              <a href="#">Выйти</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavProfile;
