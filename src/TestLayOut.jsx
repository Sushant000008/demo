import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNav from './MyNav'
const TestLayOut = () => {
  return (
    <>
    <MyNav/>
    <Outlet/>
    </>
  )
}

export default TestLayOut