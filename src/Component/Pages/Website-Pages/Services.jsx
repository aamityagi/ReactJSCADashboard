import React from 'react'
import AddServices from './Services/AddServices'
import ManageServices from '../../DataTable/ManageServices'

const Services = () => {
  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Services</h1>
      </div>
      <div className='row'>
        {/* Add Services Start */}
        <div className='col-md-12'>
          <AddServices/>
        </div>
        {/* Add Services End */}
        {/* Services Table Edit and Delete Start */}
        <ManageServices/>
        {/* Services Table Edit and Delete End */}
      </div>
    </>
  )
}

export default Services
