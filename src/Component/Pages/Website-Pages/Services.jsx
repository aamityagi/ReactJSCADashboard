import React, { useEffect, useState } from 'react'
import AddServices from './Services/AddServices'
import ManageServices from '../../DataTable/ManageServices'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
const Services = () => {
  const axiosPrivate = useAxiosPrivate()
  const [servicesData, setServicesData] = useState();
  const [editServiceData, setEditServiceData ] = useState();
  // Bootstrap Modal Box
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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
          {/* Add Services Button Start */}
            <button type="button" 
              onClick={()=>{
                handleShow();
                setEditServiceData();
              }} className="btn btn-primary btn-sm float-right mb-4" data-toggle="modal" data-target="#addServices">
              <AiOutlineAppstoreAdd/> Add Services
            </button>
          {/* Add Services Button End */}
          <AddServices 
            show={showModal} 
            handleClose={handleClose}
            editServiceData={editServiceData}
            onComplete={()=>{
              fetchServiceData();
            }}
          />
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
                  setEditServiceData={setEditServiceData}
                  modalOpen={handleShow}
                  onComplete={()=>{
                    fetchServiceData()
                  }}
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
