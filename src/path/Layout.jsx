import React from 'react'
import {MainNavigation} from './MainNavigation'

export const Layout = (props) => {
  return (
    <div>
        <MainNavigation/>
        {props.children}
    </div>
  )
}
