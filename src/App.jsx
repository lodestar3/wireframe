import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameScreen } from "./screens/FrameScreen";
import { Frame } from "./screens/Frame";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { FlaskSoftUi } from "./screens/FlaskSoftUi";
import { AnimaDevMode } from "./screens/AnimaDevMode";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FrameScreen />,
  },
  {
    path: "/frame-1709",
    element: <FrameScreen />,
  },
  {
    path: "/frame-1714",
    element: <Frame />,
  },
  {
    path: "/frame-1710",
    element: <DivWrapper />,
  },
  {
    path: "/frame-1713",
    element: <Screen3 />,
  },
  {
    path: "/frame-1711",
    element: <Screen4 />,
  },
  {
    path: "/frame-1712",
    element: <Screen5 />,
  },
  {
    path:
      "/flask-soft-ui-dashboardu46appseed-srv1u46com-by-htmlu46tou46design-u10084u65039-free-version-01u4709u472023u44-15u5855u5838-gmtu439",
    element: <FlaskSoftUi />,
  },
  {
    path: "/anima-dev-mode",
    element: <AnimaDevMode />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
