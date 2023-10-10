import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email:'',
        password:''
    })
    const navigateTo = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3003/register",  formValues)
        .then(res => {
            if(res.data.Status === "Success"){
                navigateTo('/')
            }else{
                alert("Error")
            }
        })
        .then(err => console.log(err))
    }
  return (
    <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="img" style={{backgroundImage: 'url(images/bg-1.jpg)'}}>
              </div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Register</h3>
                  </div>
                </div>
                <form className="signin-form" onSubmit={handleRegister}>
                <div className="form-group mb-3">
                    <label className="label" htmlFor="name">Name</label>
                    <input type="text" id="fullName" className="form-control" placeholder="Enter Name" required onChange={e => setFormValues({...formValues, name: e.target.value})}/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="email">Username</label>
                    <input type="text" id="email" className="form-control" placeholder="Enter Email Id" required onChange={e => setFormValues({...formValues, email: e.target.value})}/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" required  onChange={e => setFormValues({...formValues, password: e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Register</button>
                  </div>
                </form>
                <p className="text-center">Already Mamber <Link to={"/"}>Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Register
