import React from 'react'
import ManagePermission from '../DataTable/ManagePermission'

const UserPermissions = () => {

  return (
    <>
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4 row">
        <h1 className="h3 text-gray-800">User Permission</h1>
        <hr/>
        {/* Add User Permission Start */}
        <form className='row'>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Id"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="form-group col-md-2 text-right">
            <button type="submit" class="btn btn-primary mb-2">Invite</button>
          </div>
        </form>
        {/* Add User Permission End */}
        <hr/>
        {/* User Permission Table Start */}
        <div className='col-md-12'>
          <ManagePermission/>
        </div>
        {/* User Permission Table End */}

    </div>
    </>
  )
}

export default UserPermissions
