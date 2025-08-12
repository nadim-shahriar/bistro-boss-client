import { StrictMode } from 'react'
import './index.css'
import {
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import router from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <HelmetProvider>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>

  </StrictMode>,
);
