import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {MdFeedback} from 'react-icons/md'
import {BsFillQuestionOctagonFill, BsMicrosoftTeams} from 'react-icons/bs'
import { FaStickyNote, FaCreativeCommonsNd } from 'react-icons/fa'
import { TbBrand4Chan, TbBrandAirbnb } from 'react-icons/tb'
import { CgWebsite } from 'react-icons/cg'
import { GrBusinessService } from 'react-icons/gr'
import {AiFillUnlock} from 'react-icons/ai'
const Sidebar = () => {
  const [sideBarToggle, setSideBarRoggle] = useState('');
  const sideBarOpenClose = () => {
    if(sideBarToggle === "")
    {
      setSideBarRoggle('toggled')
    }else {
      setSideBarRoggle('')
    }
    
  }
  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${sideBarToggle}`}
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          CA Dashbaord
        </div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </Link>
      </li>
      {/* Nav Item - user permissions */}
      <li className="nav-item active">
        <Link className="nav-link" to="/user-permissions">
          <AiFillUnlock/>
          <span> User Permissions</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider"/>
      {/* Heading */}
      <div className="sidebar-heading">
          Website Component
      </div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-solid fa-file"></i>
          <span>Pages</span>
        </Link>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Pages</h6>
            <Link className="collapse-item" to="/home">
              Home
            </Link>
            <Link className="collapse-item" to="/about">
              About
            </Link>
            <Link className="collapse-item" to="/pricing">
              Pricing
            </Link>
            <Link className="collapse-item" to="/contact">
              Contact Us
            </Link>
            <Link className="collapse-item" to="/blogs">
              Blog's
            </Link>
          </div>
        </div>
      </li>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog" />
          <span>Services</span>
        </Link>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Services Request:</h6>
            <Link className="collapse-item" to="buttons.html">
              CURD Services
            </Link>
          </div>
        </div>
      </li>
      {/* Nav Item - Common Component */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <FaCreativeCommonsNd/>
          <span> Website Common</span>
        </Link>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Services Request:</h6>
            <Link className="collapse-item" to="/about-short-note">
              <FaStickyNote/>
              <span> About Short Notes</span>
            </Link>
            <Link className="collapse-item" to="/team">
              <BsMicrosoftTeams/>
              <span> Team</span>
            </Link>
            <Link className="collapse-item" to="/about-our-services">
              <GrBusinessService/>
              <span> About Our Services</span>
            </Link>
            <Link className="collapse-item" to="/customers-feedback">
              <MdFeedback/>
              <span> Customers Feedback</span>
            </Link>
            <Link className="collapse-item" to="/frequently-asked-questions">
              <BsFillQuestionOctagonFill/>
              <span> FAQ</span>
            </Link>
            <Link className="collapse-item" to="/worked-with-brand">
              <TbBrand4Chan fill='#000'/>
              <span> Worked With Brand</span>
            </Link>
            <Link className="collapse-item" to="/website-footer-options">
              <CgWebsite fill='#000'/>
              <span> Website Footer Options</span>
            </Link>
          </div>
        </div>
      </li>
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={sideBarOpenClose}/>
      </div>
    </ul>
  )
}

export default Sidebar
