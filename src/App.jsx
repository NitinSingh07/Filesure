import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import F12Main from "./F12Main";

import Desktop from "./pages/Desktop";
import Frame1171277489 from "./pages/Frame1171277489";

const router = createBrowserRouter([
  // { path: '/', element: <F12Main /> },
  { path: "/", element: <Desktop /> },
  // { path: '/Frame1171277489', element: <Frame1171277489 /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
