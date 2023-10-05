import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Topbar from './component/Topbar'

function PortalLayout() {
  return (
     <div id="wrapper">
  <Sidebar />
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar />
      <Outlet/> 
    </div>
  </div>
</div>

  )
}

export default PortalLayout