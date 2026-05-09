import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAccessTokenFromCookie } from "../../utils/app.utils";
import { SSOCOOKIES } from "../../constants/cookies.const";
import { useApiResult } from "../../hook/api/useApiResult";
import { meSvcCaller } from "../../services/auth/me/me.svc";

const AuthWrapper: React.FC = () => {
  const token = getAccessTokenFromCookie(SSOCOOKIES.ACCESS_TOKEN);
  const { isLoading, isSuccess, isIdle } = useApiResult(meSvcCaller)

  useEffect(() => {
    if (token) {
      meSvcCaller.execute({})
    }
  }, [token])

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  if (!isSuccess) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthWrapper;
