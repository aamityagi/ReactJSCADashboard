import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const ManageServices = (props) => {
  const axiosPrivate = useAxiosPrivate()
  const [loading, setLoading] = useState();
  const editRowData = async (id) =>{
    const res = await axiosPrivate.get(`${process.env.REACT_APP_GET_ALL_Services_By_ID}${id}`);
    props.setEditServiceData(res.data)
  }
  const deleteByID = async(id)=>{
    try{
      let yes = window.confirm("Do you Want to Delete");
      if(!yes) return;
      setLoading(true)
      await axiosPrivate.delete(`${process.env.REACT_APP_GET_ALL_Services_By_ID}${id}`);
      props.onComplete(); 
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
// columns of data base form API
const columns = [
  {name:"Service Type", selector: row => row.serviceType, sortable: true},
  {name:"Service Name", selector: row => row.serviceName, sortable: true},
  {name:"Amount", selector: row => row.serviceAmount, sortable: true},
  {name:"Discount", selector: row => row.serviceDiscount, sortable: true},
  {name:"Final Amount", selector: row => row.finalAmount, sortable: true},
  {name:"Action", 
    cell: (row) => {
      return(
        <>
          <button 
            onClick={()=>{
              props.modalOpen();
              editRowData(row.id)
            }}
            type="button" 
            className="btn btn-success btn-sm mr-2" 
            data-toggle="modal" 
            data-target="#addServices">
            <AiOutlineEdit/>
          </button>
          <button 
            onClick={()=> deleteByID(row.id)}
            type="button" 
            className="btn btn-danger btn-sm" 
            data-toggle="modal" 
            data-target="#managePermission">
            <AiOutlineDelete/>
          </button>
        </>
      )
    }
  }
]
// API Store Data
const servicesApiData = props.servicesData.data.map((service, i)=>{
  return {
    id: service.id, 
    serviceType: service.service_type, 
    serviceName: service.service_name, 
    serviceAmount: service.service_price, 
    serviceDiscount: service.discount, 
    finalAmount: service.service_type
  }
});
  return (
    <>
      {/* Table Start */}
      <DataTable
        columns={columns}
        data = {servicesApiData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='450px'
        highlightOnHover
      />
      {/* Table End */}
    </>
  )
}

export default ManageServices
