import React from 'react'
import { Outlet} from 'react-router-dom'
import Sidebar from '../Common/Sidebar/Sidebar'
import TopHeader from '../Common/TopHeader/TopHeader'
import Footer from '../Common/Footer/Footer'
const Layout = () => {
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <Sidebar/>
      {/* End of Sidebar */}
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <TopHeader/>
          {/* End of Topbar */}
          {/* Begin Page Content */}
          <div className="container-fluid">
            <Outlet/> 
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <Footer/>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}
    </div>
  )
}

export default Layout
