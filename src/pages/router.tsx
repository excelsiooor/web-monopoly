import React from 'react'
import { ROUTES } from '../lib/constants/routes.const'
import { RouteType } from '../lib/types/global.types'

export const publicRoutes: RouteType[] = [
  { exact: true, path: ROUTES.SIGN_UP, element: <h1>SignUp</h1> },
]
export const privateRoutes: RouteType[] = [
  { exact: true, path: ROUTES.HOME, element: <h1>HOME</h1> },
]
