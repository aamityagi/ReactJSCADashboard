import React from 'react'

const Pricing = () => {
  return (
    <>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Pricing Page</h1>
        </div>
        {/* Pricing Plane Start */}
        <form className='row'>
            <div className="form-group col-md-6">
                <input type="text" className="form-control" placeholder="Sub Heading"/>
            </div>
            <div className="form-group col-md-6">
                <textarea className="form-control" rows="3" placeholder='Enter Main Heading'></textarea>
            </div>
            <div className="form-group  col-md-6">
                <input type="text" className="form-control" placeholder="Main Heading"/>
            </div>
            <div className="form-group">
                <textarea className="form-control" rows="3" placeholder='Discription'></textarea>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Mobile Number"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Email Id To be Show"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" rows="3" placeholder='Enter Address'></textarea>
            </div>
            <div className='col-md-12 text-center'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#singleUserData">
                    Submit
                </button>
            </div>
        </form>
    </>
  )
}

export default Pricing
