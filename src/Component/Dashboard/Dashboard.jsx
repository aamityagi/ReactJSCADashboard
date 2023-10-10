import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
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
    <div className='contianer mt-4'>
      {
        auth ?
        // User Authenticated and Layout Architecture
        <div>
            <h1>{name}</h1>
            <button className='btn-danger' onClick={handleLogout}>logout</button>
        </div>
        : 
        // User Not Authenticated
        navigateTo('/')
      }
    </div>
  )
}

export default Dashboard
