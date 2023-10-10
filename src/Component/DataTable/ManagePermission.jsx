import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import {FcDownload} from 'react-icons/fc'

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
                        <h5 className="alert alert-primary small" role="alert">Add or Edit Permissions for indiancrafthub (indiancrafthub@gmail.com) in Indian Craft Hub</h5>
                        <hr/>
                        <h4>User Permission Access</h4>
                    </div>
                    <div className='col-md-12'>
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" data-toggle="collapse" data-target="#websiteContentUserPermissionAccess" aria-expanded="true" aria-controls="websiteContentUserPermissionAccess">
                                    <h5 className="mb-0">
                                        Website Content
                                    </h5>
                                </div>
                                <div id="websiteContentUserPermissionAccess" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" data-toggle="collapse" data-target="#servicesUserPermissionAccess" aria-expanded="false" aria-controls="servicesUserPermissionAccess">
                                    <h5 className="mb-0">
                                        Services
                                    </h5>
                                </div>
                                <div id="servicesUserPermissionAccess" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" data-toggle="collapse" data-target="#digitalMarketingUserPermissionAccess" aria-expanded="false" aria-controls="digitalMarketingUserPermissionAccess">
                                    <h5 className="mb-0">
                                        Digital Marketing
                                    </h5>
                                </div>
                                <div id="digitalMarketingUserPermissionAccess" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
