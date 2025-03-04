import { FC } from "react";
import scss from "./Footer.module.scss";
import { usePathname } from "next/navigation";

const Footer: FC = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/auth")) return null;
  if (pathname.startsWith("/profil")) return null;
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h1>Logo</h1>
            <p>
              (Название)— это частная виртуальная сеть <br /> с уникальными
              функциями и высоким <br /> уровнем безопасности.
            </p>
            <div className={scss.foricon}>
              <h3></h3>
              <h3></h3>
              <h3></h3>
            </div>
            <span>©2020LaslesVPN</span>
          </div>

          <div className={scss.top}>
            <div className={scss.product}>
              <h2>Продукт</h2>
              <h3>Download </h3>
              <h3>Pricing </h3>
              <h3>Locations</h3>
              <h3>Server </h3>
              <h3>Countries</h3>
              <h3>Blog </h3>
            </div>
            <div className={scss.product}>
              <h2>Engage</h2>
              <h3>LaslesVPN ? </h3>
              <h3>FAQ </h3>
              <h3>Tutorials</h3>
              <h3>About Us </h3>
              <h3>Privacy Policy</h3>
              <h3>Terms of Service </h3>
            </div>
            <div className={scss.product}>
              <h2>Earn Money</h2>
              <h3>Affiliate </h3>
              <h3>Become Partner </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
