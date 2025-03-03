import LayoutAuth from "@/components/auth/layout/LayoutAuth";
import { FC, ReactNode } from "react";

interface IlayoutProps {
  children: ReactNode;
}

const LayoutLogin: FC<IlayoutProps> = ({ children }) => {
  return <LayoutAuth>{children}</LayoutAuth>;
};

export default LayoutLogin;
