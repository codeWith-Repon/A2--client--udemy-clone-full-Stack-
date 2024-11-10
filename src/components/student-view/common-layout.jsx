import React from 'react'
import { Outlet } from 'react-router-dom'
import StudnetViewCommonHeader from './header'

const StudentViewCommonLayout = () => {
  return (
    <div>
      <StudnetViewCommonHeader/>
      <Outlet/>
    </div>
  )
}

export default StudentViewCommonLayout
