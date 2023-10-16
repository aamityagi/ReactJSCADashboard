import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
const ManageServices = () => {
  // columns of data base form API
const columns = [
  {name:"Service Type", selector: row => row.serviceType, sortable: true},
  {name:"Service Name", selector: row => row.serviceName, sortable: true},
  {name:"Amount", selector: row => row.serviceAmount, sortable: true},
  {name:"Discount", selector: row => row.serviceDiscount, sortable: true},
  {name:"Final Amount", selector: row => row.finalAmount, sortable: true},
  {name:"Action", selector: () => {
    return(
      <>
      <button type="button" onClick={handleUpdateService(data.i)} className="btn btn-success btn-sm mr-2" data-toggle="modal" data-target="#managePermission">
        <AiOutlineEdit/>
      </button>
      <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#managePermission">
        <AiOutlineDelete/>
      </button>
      </>
    )
  }},
]
// Update Manage Single Services Data
function handleUpdateService(i){
  
}
// API Store Data
const data = [
  {id: 1, serviceType: "ITR", serviceName: 'ITR 1', serviceAmount: "2000 RS", serviceDiscount:"10%", finalAmount:"1800 RS"},
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
  {id: 4, name: "Reports"},
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
    <>
      {/* Table Start */}
      <DataTable
        columns={columns}
        data = {searchRecords}
        fixedHeader
        pagination
      />
      {/* Table End */}
    </>
  )
}

export default ManageServices
