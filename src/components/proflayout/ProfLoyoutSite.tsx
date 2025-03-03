"use client";
import React, { FC, ReactNode } from "react";
import ProfHeader from "./profheader/ProfHeader";
import NavProfile from "./navProfile/NavProfile";
import scss from "./ProfLoyout.module.scss"

interface IProfLoyoutSiteProps {
  children: ReactNode;
}

const ProfLoyoutSite: FC<IProfLoyoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.ProfLoyoutSite}>
      <ProfHeader />
      <div className={scss.all}>
        <NavProfile/>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default ProfLoyoutSite;
