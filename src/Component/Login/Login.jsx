import { useState, useEffect, useRef} from 'react'
import './Login.css'

import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import useAuth from '../../hooks/useAuth'
const Login = () => {
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    //Navigate  Url
    const navigate = useNavigate();
    // Set Message
    const [errMsg, setErrMsg] = useState('');
    // Store User input in this process this useState
    const [formValues, setFormValues] = useState({
        userName:'',
        password:''
    })
    useEffect(()=>{
      setErrMsg('')
    },[formValues.userName, formValues.password]);
    // Handle Login Start
    const handleLogin = async (e) => {
        e.preventDefault();
        // Use qs for convert requied data in to stringify
        const qs = require('qs');
        let data = qs.stringify({
          'username': `${formValues.userName}`,
          'password': `${formValues.password}`,
          'grant_type': 'password',
          'client_id': 'ca-website',
          'client_secret': 'nUSw2Rlf661q9b9iYwfUtj37nrHmWIi6' 
        });
        // All required config in a one place
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN__TOKEN_URL}`,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data : data
        };
        // Now Put The Axios Request with the full configration variable = config
        axios.request(config)
        .then((response) => {
          // Decode JWT Token and set in setData for Further use
          const accessToken = response?.data?.access_token;
          const accessTokenDecode = jwtDecode(response?.data?.access_token);
          const username = accessTokenDecode.preferred_username;
          const userID = accessTokenDecode.sub;
          const roles = accessTokenDecode.realm_access.roles;
          setAuth({username, userID, roles, accessToken});
          // console.log("User Name:- " + username, ", User id:- " + userID, ", User role:- " + roles, ", User Access Token:- " + accessToken);
          roles[0] === "user" 
          ? navigate('overview')
          : roles[0] === "admin" 
            ? navigate('/dashboard')
            : navigate("/")
        })
        .catch((error) => {
          // If Server not Response
          if(!error?.response){
            setErrMsg('Server Not Responding')
          }
          // Username and Password is not match
          else if(error.response?.status === 400){
            setErrMsg('Please Enter Correct Username and Password')
          }
          // If Un-Known user need to be login
          else if(error.response?.status === 401){
            setErrMsg('Invalid user Credentials')
          }
          // Other Error
          else{
            setErrMsg('Login Faild')
          }
        });
        errRef.current.focus();
    }
    // Handle Login End
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
                          <p ref={errRef} className={errMsg ? "text-danger" : "d-none"} aria-live="assertive">
                            {errMsg}
                          </p>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              id="userName"
                              aria-describedby="emailHelp"
                              placeholder="Enter Username"
                              ref={userRef}
                              required
                              autoCapitalize='off'
                              onChange={e => setFormValues({...formValues, userName: e.target.value})}
                              value={formValues.userName}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="password"
                              placeholder="Password"
                              value={formValues.password}
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
