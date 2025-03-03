import { FC } from "react";
import scss from "./ProfHeader.module.scss";
import { GoBell } from "react-icons/go";
import Image from "next/image";
import profileimg from "@/assets/img/Peofile.png"

const ProfHeader: FC = () => {
  return (
    <section className={scss.ProfHeader}>
      <div className="container">
        <div className={scss.content}>
          <h1>Logo</h1>
          <div className={scss.forIcon}>
            <span>
              <GoBell />
            </span>
              <Image src={profileimg} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfHeader;
