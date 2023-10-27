import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

const ManagePermission = () => {
// columns of data base form API
const columns = [
    {name:"Name", selector: row => row.name, sortable: true},
    {name:"Email Id", selector: row => row.emailId, sortable: true},
    {name:"Number", selector: row => row.mnumber, sortable: true},
    {name:"Remark", selector: row => row.permissionRemark, sortable: true},
    {name:"Status", selector: row => row.permissionStatus, sortable: true},
    {name:"Action", selector: () => {
      return(
        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#managePermission">
          Manage Permission
        </button>
      )
    }},
  ]
  // API Store Data
  const data = [
    {id: 1, name: "Demo 1", emailId: 'demo1@gmail.com', mnumber: 9999999999, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 2, name: "Demo 2", emailId: 'demo2@gmail.com', mnumber: 8888888888, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 3, name: "Demo 3", emailId: 'demo3@gmail.com', mnumber: 7777777777, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 4, name: "Demo 4", emailId: 'demo4@gmail.com', mnumber: 6666666666, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 5, name: "Demo 5", emailId: 'demo5@gmail.com', mnumber: 5555555555, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 6, name: "Demo 6", emailId: 'demo6@gmail.com', mnumber: 4444444444, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 7, name: "Demo 1", emailId: 'demo1@gmail.com', mnumber: 9999999999, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 8, name: "Demo 2", emailId: 'demo2@gmail.com', mnumber: 8888888888, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 9, name: "Demo 3", emailId: 'demo3@gmail.com', mnumber: 7777777777, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 10, name: "Demo 4", emailId: 'demo4@gmail.com', mnumber: 6666666666, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 11, name: "Demo 5", emailId: 'demo5@gmail.com', mnumber: 5555555555, permissionRemark:"ITR Request", permissionStatus:"pending"},
    {id: 12, name: "Demo 6", emailId: 'demo6@gmail.com', mnumber: 4444444444, permissionRemark:"ITR Request", permissionStatus:"pending"},
  ]
// Permission Table Colum
const permissionTableColumns = [
    {name:"Permisstion", selector: row => row.name, sortable: true},
    {name:"View", selector: () => {
        return(
        <div className="form-check">
            <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleCheckBox2" value="option1" />
        </div>
        )
      }},
    {name:"Edit", selector: () => {
        return(
            <div className="form-check text-center">
                <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleCheckBox2" value="option2" />
            </div>
        )
      }},
    {name:"Delete", selector: () => {
        return(
        <div className="form-check">
            <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleCheckBox2" value="option4" />
        </div>
        )
      }},
    {name:"Admin", selector: () => {
        return(
        <div className="form-check">
            <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleCheckBox2" value="option5" />
        </div>
        )
      }},
  ]
  // Permission Table Data 
  const permissionTableData = [
    {id: 1, name: "Website Component"},
    {id: 2, name: "Digital Marketing"},
    {id: 3, name: "Services On Website"},
    {id: 4, name: "View Services Details"},
    {id: 5, name: "Reports"},
  ]
  // Search Data in Table
  const [searchRecords, setSearchRecords] = useState(data)
  function handelTableSearch(event){
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setSearchRecords(newData)
  }
  return (
    <div>
      {/* Form Modal User Related Infor Start */}
      <div className="modal fade" id="managePermission" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Name <span className='small alert alert-success pt-1 pb-1' role="alert">Status:- Active</span></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <div className='row'>
                    <div className='col-md-12 mb-2'>
                        <div className="alert alert-secondary row m-0" role="alert">
                            <div className='col-md-4'>Name:- <span className='bold'>Demo</span></div>
                            <div className='col-md-4'>Email Id:- <span className='bold'>Demo@Gmail.com</span></div>
                            <div className='col-md-4'>Number:- <span className='bold'>9999999999</span></div>
                        </div>
                    </div>
                </div>
                {/* User Permission Access Start */}
                <div className='row'>
                    <div className="col-md-12">
                        <h5 className="alert alert-primary small" role="alert">Add or Edit Permissions for User Name (Demo1@gmail.com) in Company Name</h5>
                        <hr/>
                        <h4>User Permission Access</h4>
                    </div>
                    <DataTable
                        columns={permissionTableColumns}
                        data = {permissionTableData}
                        fixedHeader
                        pagination
                    />
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* Form Modal User Related Infor End */}
      {/* Table Search field Start */}
      <div className='text-end'><input type='text' onChange={handelTableSearch}/></div>
      {/* Table Search field End */}
      {/* Table Start */}
      <DataTable
        columns={columns}
        data = {searchRecords}
        fixedHeader
        pagination
      />
      {/* Table End */}
    </div>
  )
}

export default ManagePermission
