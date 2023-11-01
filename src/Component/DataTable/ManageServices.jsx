import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
const ManageServices = ({servicesData}) => {
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
      <button type="button" className="btn btn-success btn-sm mr-2" data-toggle="modal" data-target="#managePermission">
        <AiOutlineEdit/>
      </button>
      <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#managePermission">
        <AiOutlineDelete/>
      </button>
      </>
    )
  }},
]
// API Store Data
const servicesApiData = servicesData.data.map((service, i)=>{
  return {
    id: service.id, 
    serviceType: service.service_type, 
    serviceName: service.service_name, 
    serviceAmount: service.service_price, 
    serviceDiscount: service.discount, 
    finalAmount: service.service_type
  }
});
// API Store Data
const data = [...servicesApiData]

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
