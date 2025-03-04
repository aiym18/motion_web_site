import LayoutAuth from "@/components/auth/layout/LayoutAuth";
import ProfLoyoutSite from "@/components/proflayout/ProfLoyoutSite";
import { FC, ReactNode } from "react";

interface IlayoutProps {
  children: ReactNode;
}

const LayoutPrifile: FC<IlayoutProps> = ({ children }) => {
  return <ProfLoyoutSite>{children}</ProfLoyoutSite>;
};

export default LayoutPrifile;
