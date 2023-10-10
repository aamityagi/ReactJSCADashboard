import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [formValues, setFormValues] = useState({
        email:'',
        password:''
    })
    const navigateTo = useNavigate();
    // Axios Set Defaults Credentials
    axios.defaults.withCredentials = true;
    const handleLogin = (e) => {
        console.log(formValues)
        e.preventDefault();
        axios.post("http://localhost:3003/login",  formValues)
        .then(res => {
            if(res.data.Status === "Success"){
                navigateTo('/dashboard')
            }else{
                console.log("Error")
            }
        })
        .then(err => console.log(err))
    }
  return (
    <div className='bg-gradient-primary vh-100'>
      <div className="container">
        {/* Outer Row */}
        <div className="row vh-100 d-flex justify-content-center align-items-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            required
                            onChange={e => setFormValues({...formValues, email: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            required
                            onChange={e => setFormValues({...formValues, password: e.target.value})}
                          />
                        </div>
                        {/* <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div> */}
                        <button type='submit' className="btn btn-primary btn-user btn-block">Login</button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to={'/forgot-password'}>
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
