import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../lib/theme/mui.theme';
import { privateRoutes, publicRoutes } from '../pages/router';
import { STORAGE_KEYS } from '../lib/constants/app-keys-const';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer: FC = () => {

  const Router = createBrowserRouter(localStorage.getItem(STORAGE_KEYS.ID_TOKEN) ? privateRoutes : publicRoutes)

  return (
    <ThemeProvider theme={muiTheme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default AppContainer;
