import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Listas from "./pages/Listas.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/cadastro", element: <Cadastro /> },

      { path: "/listas", element: <Listas /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers}></RouterProvider>
);
