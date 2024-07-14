import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
