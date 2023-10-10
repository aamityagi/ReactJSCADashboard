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


function App() {
  return (
    <>
        <Routes>
          {/* Login and Registration Render First */}
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          {/* After Login component and page Render Start in Layout */}
          <Route path='/' element={<Layout/> }>
            {/* Admin View Pages Start */}
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/user-permissions' element={<UserPermissions/>}></Route>

            {/* Webstie Pages Access */}
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/enquire' element={<Enquire/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            {/* Common Component Start */}
            <Route path='/about-short-note' element={<AboutShortNotes/>}></Route>
            <Route path='/about-our-services' element={<AboutOurServices/>}></Route>
            <Route path='/customers-feedback' element={<CustomersFeedback/>}></Route>
            <Route path='/frequently-asked-questions' element={<FrequentlyAskedQuestions/>}></Route>
            <Route path='/team' element={<Team/>}></Route>
            <Route path='/worked-with-brand' element={<WorkedWithBrand/>}></Route>
            <Route path='/website-footer-options' element={<WebsiteFooter/>}></Route>
            {/* Common Component End */}
            {/* Admin View Pages End */}
          </Route> 
          {/* If the User or other person Search by the Url Like:- www.demo.com/test or another page **/}
          <Route path='*' element={<Login/>}></Route>
        </Routes>
    </>
  );
}

export default App;
