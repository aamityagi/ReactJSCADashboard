import React, { useEffect, useState } from 'react'
import ClientDataTableViewe from '../DataTable/ClientDataTableViewe'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const Dashboard = () => {
  const axiosPrivate = useAxiosPrivate()
  const [enquireData, setEnquireData] = useState();
  useEffect(()=>{
    let isMounted = true;
    const controller = new AbortController();
    const getEnquire = async () => {
      try{
        const response = await axiosPrivate.get(`${process.env.REACT_APP_Enquires}`,{
          signal: controller.signal
        });
        console.log(response.data)
        isMounted && setEnquireData(response.data);
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
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Enquery (Now)
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        <span>4</span> / <span>10</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pay Now Enquery (Paid) */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Pay Now Enquery (Paid)
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        <span>3</span> / <span>10</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Total Services Enquery */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Services Enquery
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        <span>3</span> / <span>10</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-fw fa-cog fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Day, Week, Month, Year Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        DD/MM/YY Enquery
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Data Table Start */}
            <div className='col-md-12'>
              {enquireData?.data 
                ? <ClientDataTableViewe enquireData={enquireData}/> 
                : "Data Not Found"}
              
            </div>
          </div>
                  
</>

  )
}

export default Dashboard
