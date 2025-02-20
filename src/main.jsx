import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </StrictMode>
);
