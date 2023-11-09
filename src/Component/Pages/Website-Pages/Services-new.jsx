import React, { useEffect, useState } from 'react'
import ManageServices from '../../DataTable/ManageServices'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import CUService from './Services/CUService'

const Services = () => {
  const axiosPrivate = useAxiosPrivate()
  const [servicesData, setServicesData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [singleRowData, setSingleRowData] = useState();
  // When Find data is Updated AutoRefresh
  async function fetchServiceData() {
    try{
      const response = await axiosPrivate.get(`${process.env.REACT_APP_Services}`);
      setServicesData(response.data)
    }
    catch(error) {
      console.log(error)
    }
  }
  useEffect( ()=>{
    fetchServiceData();
  },[]);
  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Services</h1>
      </div>
      <div className='row'>
        {/* Add Services Start */}
        <div className='col-md-12'>
          <button onClick={()=> {
                setOpenModal(true)
            }
            }>Add Service</button>
          {openModal && (
            <CUService 
            editData={singleRowData}
            onComplete={()=> {
                setOpenModal(false)
                fetchServiceData()
            }}/>
          )}
        </div>
        {/* Add Services End */}
        {/* Services Table Edit and Delete Start */}
        {servicesData?.data.length === 0 
        ? <>
            <div className="alert alert-secondary text-center" role="alert">
              <h4>"No Service Create"</h4>
              <h6>`Clicke On <AiOutlineAppstoreAdd/> Add Service, Then please Create your First Service` </h6>
            </div>
          </>
          : servicesData?.data 
              ? <ManageServices 
                servicesData={servicesData} 
                onComplete={()=>fetchServiceData()}
                modalOpen= {()=>setOpenModal(true)}
                setSingleRowData={setSingleRowData}
              /> 
              : <>
                  <div className="alert alert-secondary text-center" role="alert">
                    <h4>"Data Fetching From Server"</h4>
                    <h6>Please Wait For Some Time</h6>
                  </div>
                </>
              }
        {/* Services Table Edit and Delete End */}
      </div>
    </>
  )
}

export default Services
