import { createBrowserRouter, type RouteObject } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AuthWrapper from "./organisms/auth-wrapper/AuthWrapper";
import GuestWrapper from "./organisms/guest-wrapper/GuestWrapper";

const routers: RouteObject[] = [
  {
    element: <GuestWrapper />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <AuthWrapper />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routers);
