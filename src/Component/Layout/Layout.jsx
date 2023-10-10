import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Common/Sidebar/Sidebar'
import TopHeader from '../Common/TopHeader/TopHeader'
import Footer from '../Common/Footer/Footer'
import axios from 'axios'
const Layout = () => {
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')
  const navigateTo = useNavigate()
  axios.defaults.withCredentials = true;
  // User Verification and Complete data Functionality
  useEffect(() => {
      axios.get('http://localhost:3003')
      .then(res => {
          if(res.data.Status === "Success") {
              setAuth(true)
              setName(res.data.name)
          } else {
              setAuth(false)
          }
      })
      .then(err => console.log(err))
  }, [])
  // Logout Functionality
  const handleLogout = () => {
    axios.get('http://localhost:3003/logout')
    .then(res => {
      navigateTo('/')
    }).catch(err => console.log(err))
  }
  return (
    <>
    {
        auth ?
            <>
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
            </>   
        : 
        // User Not Authenticated
        navigateTo('/')
      }
    </>
  )
}

export default Layout
