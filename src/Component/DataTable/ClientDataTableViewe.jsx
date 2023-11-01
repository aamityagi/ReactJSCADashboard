import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import {FcDownload} from 'react-icons/fc'
const ClientDataTableViewe = ({enquireData}) => {
  console.log(enquireData.data);
  const [customerId, setCustomerId] = useState();
  console.log(customerId + "curomter id")
  const columns = [
    {name:"Sr.", selector: row => row.sr, sortable: true},
    {name:"Name", selector: row => row.user_name, sortable: true},
    {name:"Email Id", selector: row => row.user_email, sortable: true},
    {name:"Number", selector: row => row.mnumber, sortable: true},
    {name:"Enquiry Types", selector: row => row.enquiry_type, sortable: true},
    {name:"Status", selector: row => row.payment_status, sortable: true},
    {name:"Action", selector: () => {
      return(
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#singleUserData">
          Edit
        </button>
      )
    }},
  ]
  // API Store Data
  const customerApiData = enquireData.data.map((customer, i)=>{
    return {
      id: customer.id,
      user_id: customer.user_id, 
      sr: i + 1, 
      user_name: customer.user_name, 
      user_email: customer.user_email, 
      mnumber: 9999999999, 
      enquiry_type:customer.enquiry_type, 
      payment_status:customer.payment_status}
  });
  console.log(customerApiData)
  const data = [...customerApiData]
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
      <div className="modal fade" id="singleUserData" tabIndex="-1" aria-labelledby="singleUserData" aria-hidden="true">
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
        fixedHeader
        pagination
      />
      {/* Table End */}
    </div>
  )
}

export default ClientDataTableViewe
