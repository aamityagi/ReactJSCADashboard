import React, { useEffect, useState } from 'react'
import AddServices from './Services/AddServices'
import ManageServices from '../../DataTable/ManageServices'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'

const Services = () => {
  const axiosPrivate = useAxiosPrivate()
  const [servicesData, ServicesData] = useState();
  useEffect(()=>{
    let isMounted = true;
    const controller = new AbortController();
    const getEnquire = async () => {
      try{
        const response = await axiosPrivate.get(`${process.env.REACT_APP_Services}`,{
          signal: controller.signal
        });
        console.log(response.data)
        isMounted && ServicesData(response.data);
      }
      catch(error) {
        console.log(error)
      }
    }
    getEnquire();
    // Clean Up function in useEffect
    return () =>{
      isMounted = false;
      controller.abort();
    }
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
          <AddServices/>
        </div>
        {/* Add Services End */}
        {/* Services Table Edit and Delete Start */}
        {servicesData?.data 
            ? <ManageServices servicesData={servicesData}/> 
            : "Data Not Found"}
        {/* Services Table Edit and Delete End */}
      </div>
    </>
  )
}

export default Services
