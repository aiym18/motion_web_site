"use client";

import { useAuth } from "@/helpers/hooks/useAuth";
import LayoutClient from "./layout.client";
import LayoutLogin from "./auth/layout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoggingIn } = useAuth();

  let LayoutComponent = LayoutClient;
  if (isLoggingIn) LayoutComponent = LayoutLogin;
  //   if (user) LayoutComponent = LayoutProfile;

  return <LayoutComponent>{children}</LayoutComponent>;
}
