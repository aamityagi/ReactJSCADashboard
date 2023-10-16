import React from 'react'
import AddReferralFriend from './AddReferralFriend/AddReferralFriend'
import {BiUserCircle} from 'react-icons/bi'
import {MdPendingActions} from 'react-icons/md'

const Referral = () => {
  return (
    <>
      {/* Page Heading Start */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Referral your Friend</h1>
      </div>
      {/* Page Heading End*/}
      <div className='row'>
          <div className='col-md-12 text-right'>
            <AddReferralFriend/>
          </div>
      </div>
      {/* Referral Friend List Start */}
      <div className='row'>
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                  <div class="row no-gutters align-items-center">
                      <div class="col-auto ml-2">
                          <BiUserCircle className='h1'/>
                      </div>
                      <div class="col ml-4">
                          <div class="text-uppercase mb-1">
                            <p className='mb-1'>Name :- <span className='bold'> Demo</span></p>
                            <p className='mb-1'>Number :- <span className='bold'> 9999 9999 99</span></p>
                            <p className='mb-1'>Email :- <span className='bold'> demo@gmail.com</span></p>
                          </div>
                          <div class="btn mt-2 btn-warning btn-sm btn-icon-split font-weight-bold">
                                <span class="icon text-white-50">
                                    <MdPendingActions/>
                                </span>
                                <span class="text">Request Pending</span>
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

export default Referral
