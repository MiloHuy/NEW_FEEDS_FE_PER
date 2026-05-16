import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAccessTokenFromCookie } from "../../utils/app.utils";
import { SSOCOOKIES } from "../../constants/cookies.const";
import { useApiResult } from "../../hook/api/useApiResult";
import { meSvcCaller } from "../../services/auth/me/me.svc";

const GuestWrapper: React.FC = () => {
  const token = getAccessTokenFromCookie(SSOCOOKIES.ACCESS_TOKEN);
  const { isLoading, isSuccess, isIdle } = useApiResult(meSvcCaller);

  useEffect(() => {
    if (token && isIdle) {
      meSvcCaller.execute({});
    }
  }, [token, isIdle]);

  if (token) {
    if (isLoading || isIdle) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      );
    }

    if (isSuccess) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <Outlet />;
};

export default GuestWrapper;
