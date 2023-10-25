import React from 'react'
import './TopHeader.jsx'
import { Link, useNavigate} from 'react-router-dom'
import useLogout from '../../../hooks/useLogout'
const TopHeader = () => {
  const navigate = useNavigate();
  const mobileSideBar  = () => {
    document.querySelector('#accordionSidebar').classList.toggle('toggled');
  }
  // Logout Work Start
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate('/login');
  }
  // Logout Work End
  return (
    <>
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
            onClick={mobileSideBar}
          >
            <i className="fa fa-bars" />
          </button>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  User Name
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="img/undraw_profile.svg"
                />
              </Link>
              {/* Dropdown - User Information */}
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#singleUserData">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                  Settings
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                  Activity Log
                </Link>
                <div className="dropdown-divider" />
                <Link
                  className="dropdown-item"
                  to="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                  onClick={signOut}
                >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </nav>
    
    {/* Edit User Profile Start */}
    {/* Form Modal User Related Infor Start */}
    <div className="modal fade" id="singleUserData" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="row">
                <div className="col-md-4 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      className="rounded-circle mt-5"
                      width="150px"
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                    <span className="font-weight-bold">Edogaru</span>
                    <span className="text-black-50">edogaru@mail.com.my</span>
                    <span> </span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label className="labels">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="first name"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Surname</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue=""
                          placeholder="surname"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="labels">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter phone number"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Address Line 1</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter address line 1"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Address Line 2</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter address line 2"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Postcode</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter address line 2"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter address line 2"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Area</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter address line 2"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Email ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter email id"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Education</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="education"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="country"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">State/Region</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue=""
                          placeholder="state"
                        />
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <button className="btn btn-primary profile-button" type="button">
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* Edit User Profile End */}
    </>
  )
}

export default TopHeader
