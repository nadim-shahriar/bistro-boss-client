import { StrictMode } from 'react'
import './index.css'
import {
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import router from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
);
