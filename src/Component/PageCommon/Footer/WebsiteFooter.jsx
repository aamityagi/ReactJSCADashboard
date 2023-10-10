import React from 'react'

const WebsiteFooter = () => {
  return (
    <>
    {/* Footer Option Start */}
    <div className="col-lg-12">
        <div className="p-5">
            <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Website <span className='bold h2'>Footer</span></h1>
            </div>
            <form className='row'>
                <div className="form-group col-md-4">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    required
                    />
                </div>
                <div className="form-group col-md-4">
                    <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    required
                    rows="1"
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Page Link"
                    required
                    />
                </div>
                {/* Team Member Details Start */}
                <hr/>
                <div className="form-group col-md-3">
                    <label>Enter Address</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    required
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Enter Email ID</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Email ID"
                    required
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Enter Phone Number</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Working Hours</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Hours"
                    required
                    />
                </div>
                <hr/>
                <div className='col-md-12 mb-3'>
                    <span className='title'>Add Social Media Account</span>
                </div>
                <div className="form-group col-md-10">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Facebook Link"
                    required
                    />
                </div>
                <div className="form-group col-md-2 text-right">
                    <button type='submit' className="btn btn-primary btn-user">Add</button>
                </div>
                <hr/>
                {/* Team Member Details End */}
                <div className="form-group col-md-12">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="View More Page Link"
                    required
                    />
                </div>
                <button type='submit' className="btn btn-primary btn-user">Submit</button>
            </form>
        </div>
    </div>
    {/* Footer Option End */}
    </>
  )
}

export default WebsiteFooter
