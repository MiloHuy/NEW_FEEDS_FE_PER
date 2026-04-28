import { createBrowserRouter, type RouteObject } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";

const routers: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <div>Register </div>,
  },
];

export const router = createBrowserRouter(routers);
