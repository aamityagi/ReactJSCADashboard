import React from 'react'

const CustomersFeedback = () => {
  return (
    <>
      {/* Customers Feedback Start */}
    <div className="col-lg-12">
        <div className="p-5">
          <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4"> Customers <span className='bold h2'>Feedback</span></h1>
          </div>
          <form className='row'>
              <div className="form-group col-md-4">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Small Title"
                  required
                  />
              </div>
              <div className="form-group col-md-4">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Big Title"
                  required
                  />
              </div>
              <div className="form-group col-md-4">
                <div className="input-group mb-3">
                      <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                      </div>
                      <div className="custom-file">
                          <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                          <label className="custom-file-label" for="inputGroupFile01">Upload Image</label>
                      </div>
                  </div> 
              </div>
              
              {/* Team Member Details Start */}
              <hr/>
              <div className="form-group col-md-12">
                  <textarea
                  type="text"
                  className="form-control"
                  placeholder="Feedback"
                  required
                  />
              </div>
              <div className="form-group col-md-6">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Customer Name"
                  required
                  />
              </div>
              <div className="form-group col-md-6">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  required
                  />
              </div>
              <div className="form-group col-md-12 text-right">
                  <button type='submit' className="btn btn-primary btn-user">Add Customers Feedback</button>
              </div>
              <hr/>
              {/* Team Member Details End */}
              <div className="form-group col-md-12">
                  <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Avg Rating"
                  required
                  />
              </div>
              <button type='submit' className="btn btn-primary btn-user">Submit</button>
          </form>
        </div>
      </div>
      {/* Customers Feedback End */}
    </>
  )
}

export default CustomersFeedback
