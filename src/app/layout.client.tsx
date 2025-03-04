import LayotSite from "@/components/layout/LayoutSite";
import React, { FC, ReactNode } from "react";

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return (
    <>
      <LayotSite>{children}</LayotSite>
    </>
  );
};

export default LayoutClient;
