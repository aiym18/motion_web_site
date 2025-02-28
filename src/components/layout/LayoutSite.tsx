"use client";
import React, { FC, ReactNode } from "react";
import scss from "./LayotSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface ILayotSiteProps {
  children: ReactNode;
}

const LayotSite: FC<ILayotSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayotSite;
