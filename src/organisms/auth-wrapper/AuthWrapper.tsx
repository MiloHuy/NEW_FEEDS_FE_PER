import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAccessTokenFromCookie } from "../../utils/app.utils";
import { SSOCOOKIES } from "../../constants/cookies.const";

const AuthWrapper: React.FC = () => {
  const token = getAccessTokenFromCookie(SSOCOOKIES.ACCESS_TOKEN);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthWrapper;
