import React from 'react'

const Contact = () => {
  return (
    <>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Contact Page</h1>
        </div>
        {/* Page Contant Update Start */}
        <form className='row'>
            <div className='col-md-6'>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Sub Heading"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="3" placeholder='Enter Main Heading'></textarea>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Map Location Embed"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Form Reciver Email Id"/>
                </div>
            </div>
            <div className='col-md-6'>
                
                <div className="form-group">
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

export default Contact
