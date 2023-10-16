import React from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import ContentEditor from '../Common/ContentEditor/ContentEditor'

const PricingDataTable = () => {
   // columns of data base form API
   const columns = [
    {name:"Plan Name", selector: row => row.planName, sortable: true},
    {name:"Plan Price", selector: row => row.planPrice, sortable: true},
    {name:"Plan Time", selector: row => row.planeTime, sortable: true},
    {name:"Short Des.", selector: row => row.shortDescription, sortable: true},
    {name:"Plan Status", selector: row => row.planStatus, sortable: true},
    {name:"Action", selector: () => {
      return(
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#singlePricePlan">
          Edit
        </button>
      )
    }},
  ]
  // API Store Data
  const data = [
    {planName: "Demo 1", planPrice: '1500', planeTime: "3 Month", shortDescription:"Demo Test", planStatus:"Active"},
    {planName: "Demo 2", planPrice: '2000', planeTime: "6 Month", shortDescription:"Demo Test", planStatus:"Stop"},
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
      <div className="modal fade" id="singlePricePlan" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Prive Plan</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <form className='row'>
                    <div className="form-group col-md-4">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Plan Name"
                        required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Plan Price"
                        required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <select className="form-control" id="updateStatus">
                            <option>Choose Plan Time</option>
                            <option>1 Month</option>
                            <option>3 Month</option>
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <select className="form-control" id="updateStatus">
                            <option>Choose Plan Status</option>
                            <option>Active</option>
                            <option>Hold</option>
                        </select>
                    </div>
                    <div className='col-md-12'>
                        <ContentEditor/>
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

export default PricingDataTable
