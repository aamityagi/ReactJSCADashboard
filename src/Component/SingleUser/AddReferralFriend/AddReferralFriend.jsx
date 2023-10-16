import React from 'react'
import { Link } from 'react-router-dom'

const AddReferralFriend = () => {
  return (
    <>
        {/* Form Modal User Related Infor Start */}
        <div className="modal fade" id="addReferralFriend" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Refer to your Best Friend</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className="mb-3 col-md-4">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                            </div>
                            <div className="mb-3 col-md-4">
                                <input type="text" className="form-control" placeholder="Mobile Number"/>
                            </div>
                            <div className="mb-3 col-md-4">
                                <input type="email" className="form-control" placeholder="Enter Email Id"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="3" placeholder='Enter Remark'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        {/* Form Modal User Related Infor End */}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addReferralFriend">
            Referral Your Best Friend
        </button>
    </>
  )
}

export default AddReferralFriend
