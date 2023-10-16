import React from 'react'

const UserDashboard = () => {
  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      {/* Content Row */}
      <div className="row">
        {/* Status */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Status
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    <span>1 Active</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Payment */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Payment <small className='text-warning bold'>(Pending)</small>
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    <span>₹ 1500</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Other Services Enquery */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Other Services
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    <span>6</span> <span>Services</span>                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-fw fa-cog fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Update */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Update <span className='small text-info bold'>(Working On)</span>
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    10 Day's 
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
      </div>
      <div className='row'>
        <div className='col-md-12 dashboardUpdate'>
          <h4>Update</h4>
          <div className="card">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header pointer text-info" id="headingOne" data-toggle="collapse" data-target="#followupOne" aria-expanded="true" aria-controls="followupOne">
                  <span className='h6'>Follow - up</span><span className='float-right text-right'>16-08-2023</span>
                </div>
                <div id="followupOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.  
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header pointer text-info" id="headingTwo" data-toggle="collapse" data-target="#followupTwo" aria-expanded="false" aria-controls="followupTwo">
                  <span className='h6'>Document Check</span><span className='float-right text-right'>15-08-2023</span>
                </div>
                <div id="followupTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.  
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header pointer text-info" id="headingThree" data-toggle="collapse" data-target="#followupThree" aria-expanded="false" aria-controls="followupThree">
                <span className='h6'>Document Verification</span><span className='float-right text-right'>14-08-2023</span>
                </div>
                <div id="followupThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard
