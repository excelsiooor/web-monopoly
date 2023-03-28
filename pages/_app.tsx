/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { AppProps } from 'next/app'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@mui/material/styles'
import { muiTheme } from '../lib/theme/mui.theme'

import '../styles/main.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity,
    },
  },
})

const AppWrapper = ({ Component, pageProps, session }: any) => (
  <SessionProvider session={session}>
    <ThemeProvider theme={muiTheme}>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </SessionProvider>
)

export default AppWrapper
