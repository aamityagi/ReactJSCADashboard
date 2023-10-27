import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import ForgotPassword from './Component/ForgotPassword/ForgotPassword';
import Layout from './Component/Layout/Layout';
import Dashboard from './Component/Pages/Dashboard';
import Home from './Component/Pages/Website-Pages/Home'
import About from './Component/Pages/Website-Pages/About';
import Enquire from './Component/Pages/Website-Pages/Enquire';
import Services from './Component/Pages/Website-Pages/Services';
import AboutOurServices from './Component/PageCommon/AboutOurServices/AboutOurServices';
import AboutShortNotes from './Component/PageCommon/AboutShortNotes/AboutShortNotes';
import CustomersFeedback from './Component/PageCommon/CustomersFeedback/CustomersFeedback';
import FrequentlyAskedQuestions from './Component/PageCommon/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Team from './Component/PageCommon/Team/Team';
import WorkedWithBrand from './Component/PageCommon/WorkedWithBrand/WorkedWithBrand';
import WebsiteFooter from './Component/PageCommon/Footer/WebsiteFooter';
import UserPermissions from './Component/UserPermissions/UserPermissions';
import Pricing from './Component/Pages/Website-Pages/Pricing';
import Contact from './Component/Pages/Website-Pages/Contact';
// Sinlge User Component Start
import UserDashboard from './Component/SingleUser/UserDashboard';
import ShowAllServices from './Component/SingleUser/ShowAllServices';
import ServicesUnlock from './Component/SingleUser/ServicesUnlock';
import Referral from './Component/SingleUser/Referral';
import AboutUser from './Component/SingleUser/AboutUser';
import TrustedCompany from './Component/PageCommon/TrustedCompany/TrustedCompany';
import Unauthorized from './Component/Unauthorized/Unauthorized';
// Require Auth
import RequireAuth from './Component/RequireAuth/RequireAuth';
import PersistLogin from './Component/Login/PersistLogin';

function App() {
  return (
    <>
      <Routes>
          {/* Plublic Route Login, Register and Forgot Password */}
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/Unauthorized' element={<Unauthorized/>}></Route>
          {/* After Login we want to Protect these routes on Roal Base */}
          <Route path='/' element={<Layout/>}>
            <Route element={<PersistLogin/>}>
              <Route element={<RequireAuth allowedRoles={['admin']}/>}>
                {/* Admin View Pages Start */}
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/user-permissions' element={<UserPermissions/>}></Route>
              </Route>
              <Route element={<RequireAuth allowedRoles={['edior', 'admin']}/>}>
                {/* Webstie Pages Access */}
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/enquire' element={<Enquire/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/pricing' element={<Pricing/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
              </Route>
              <Route element={<RequireAuth allowedRoles={['edior', 'admin']}/>}>
                {/* Common Component Start */}
                <Route path='/about-short-note' element={<AboutShortNotes/>}></Route>
                <Route path='/about-our-services' element={<AboutOurServices/>}></Route>
                <Route path='/customers-feedback' element={<CustomersFeedback/>}></Route>
                <Route path='/frequently-asked-questions' element={<FrequentlyAskedQuestions/>}></Route>
                <Route path='/trusted-company' element={<TrustedCompany/>}></Route>
                <Route path='/team' element={<Team/>}></Route>
                <Route path='/worked-with-brand' element={<WorkedWithBrand/>}></Route>
                <Route path='/website-footer-options' element={<WebsiteFooter/>}></Route>
                {/* Common Component End */}
              </Route>
              <Route element={<RequireAuth allowedRoles={['user']}/>}>
                {/* Single User Access Start */}
                <Route path='/overview' element={<UserDashboard/>}></Route>
                <Route path='/all-services' element={<ShowAllServices/>}></Route>
                <Route path='/services-unlock' element={<ServicesUnlock/>}></Route>
                <Route path='/referral' element={<Referral/>}></Route>
                <Route path='/about-user' element={<AboutUser/>}></Route>
                {/* Single User Access End */}
              </Route>
            </Route>
          </Route>
          {/* If the User or other person Search by the Url Like:- www.demo.com/test or another page **/}
          <Route path='*' element={<Login/>}></Route>
        </Routes>
    </>
  );
}

export default App;
