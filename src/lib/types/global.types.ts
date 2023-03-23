import React from 'react';

export interface IMap {
  [key: string | number]: any;
}


export interface RouteType {
  path: string
  element: React.ReactNode
  exact: boolean
}