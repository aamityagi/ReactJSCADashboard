import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import {FcDownload} from 'react-icons/fc'
const DataTableViewe = () => {
  // columns of data base form API
  const columns = [
    {name:"Id", selector: row => row.id, sortable: true},
    {name:"Name", selector: row => row.name, sortable: true},
    {name:"Email Id", selector: row => row.emailId, sortable: true},
    {name:"Number", selector: row => row.mnumber, sortable: true},
    {name:"Enquiry Types", selector: row => row.enquiryTypes, sortable: true},
    {name:"Status", selector: row => row.enquiryStatus, sortable: true},
    {name:"Action", selector: () => {
      return(
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#singleUserData">
          Edit
        </button>
      )
    }},
  ]
  // API Store Data
  const data = [
    {id: 1, name: "Demo 1", emailId: 'demo1@gmail.com', mnumber: 9999999999, enquiryTypes:"Paid", enquiryStatus:"pending"},
    {id: 2, name: "Demo 2", emailId: 'demo2@gmail.com', mnumber: 8888888888, enquiryTypes:"Paid", enquiryStatus:"pending"},
    {id: 3, name: "Demo 3", emailId: 'demo3@gmail.com', mnumber: 7777777777, enquiryTypes:"Un-Paid", enquiryStatus:"pending"},
    {id: 4, name: "Demo 4", emailId: 'demo4@gmail.com', mnumber: 6666666666, enquiryTypes:"Paid", enquiryStatus:"pending"},
    {id: 5, name: "Demo 5", emailId: 'demo5@gmail.com', mnumber: 5555555555, enquiryTypes:"Paid", enquiryStatus:"pending"},
    {id: 6, name: "Demo 6", emailId: 'demo6@gmail.com', mnumber: 4444444444, enquiryTypes:"Enquiry Only", enquiryStatus:"pending"},
    {id: 7, name: "Demo 1", emailId: 'demo1@gmail.com', mnumber: 9999999999, enquiryTypes:"Paid", enquiryStatus:"pending"},
    {id: 8, name: "Demo 2", emailId: 'demo2@gmail.com', mnumber: 8888888888, enquiryTypes:"Paid", enquiryStatus:"pending"},
    {id: 9, name: "Demo 3", emailId: 'demo3@gmail.com', mnumber: 7777777777, enquiryTypes:"Un-Paid", enquiryStatus:"pending"},
    {id: 10, name: "Demo 4", emailId: 'demo4@gmail.com', mnumber: 6666666666, enquiryTypes:"Paid", enquiryStatus:"pending"},
    {id: 11, name: "Demo 5", emailId: 'demo5@gmail.com', mnumber: 5555555555, enquiryTypes:"Paid", enquiryStatus:"pending"},
    {id: 12, name: "Demo 6", emailId: 'demo6@gmail.com', mnumber: 4444444444, enquiryTypes:"Enquiry Only", enquiryStatus:"pending"},
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
      <div className="modal fade" id="singleUserData" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">User ID <span className='small alert alert-success pt-1 pb-1' role="alert">Status:- Working On</span></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className='col-md-12'>
                  <div className="alert alert-secondary row m-0" role="alert">
                    <div className='col-md-4'>Name:- <span className='bold'>Demo</span></div>
                    <div className='col-md-4'>Email Id:- <span className='bold'>Demo@Gmail.com</span></div>
                    <div className='col-md-4'>Number:- <span className='bold'>9999999999</span></div>
                  </div>
                </div>
                <div className='col-md-12 mt-2'>
                <div className="alert alert-info" role="alert">
                    <h4 className="alert-heading">Remark!</h4>
                    <p className='m-0'>Call At 5 PM for meeting</p>
                  </div>
                </div>
              </div>
            <form className='row'>
              <div className="form-group">
                <select className="form-control" id="updateStatus">
                  <option>Update Status</option>
                  <option>Working On</option>
                  <option>Pending</option>
                  <option>Done</option>
                </select>
              </div>
              <div className="form-group">
                <h5>Document Request <Link className='ml-2 small float-right'>Download All Requested Document <FcDownload/></Link></h5>
                <hr/>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="pancard" value="pancard"/>
                  <label className="form-check-label" htmlFor="pancard">Pan Card</label>
                  <Link className='ml-2'><FcDownload/></Link>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="adharcard" value="adharcard"/>
                  <label className="form-check-label" htmlFor="adharcard">Adhar Card</label>
                  <Link className='ml-2'><FcDownload/></Link>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="6Mbankstatment" value="6Mbankstatment"/>
                  <label className="form-check-label" htmlFor="6Mbankstatment">6 Month Bankstatment</label>
                  <Link className='ml-2'><FcDownload/></Link>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={"Enter your Remark"}

                />
              </div>
            </form>

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
        selectableRows
        fixedHeader
        pagination
      />
      {/* Table End */}
    </div>
  )
}

export default DataTableViewe
