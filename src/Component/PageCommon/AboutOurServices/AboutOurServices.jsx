import React from 'react'

const AboutOurServices = () => {
  return (
    <>
      {/* About Our Company Start */}
      <div className="col-lg-12">
        <div className="p-5">
          <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">Small Brief of <span className='bold h2'>OUR SERVICES</span></h1>
          </div>
          <form className='row'>
              <div className="form-group col-md-6">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Small Title"
                  required
                  />
              </div>
              <div className="form-group col-md-6">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Big Title"
                  required
                  />
              </div>
              {/* Small Brief of Services Start */}
              <hr/>
              <div className="form-group col-md-6">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  required
                  />
              </div>
              <div className="form-group col-md-6">
                <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                      </div>
                      <div class="custom-file">
                          <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                          <label class="custom-file-label" for="inputGroupFile01">Choose Image</label>
                      </div>
                  </div> 
              </div>
              <div className="form-group col-md-5">
                  <textarea
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  required
                  />
              </div>
              <div className="form-group col-md-5">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Services Link"
                  required
                  />
              </div>
              <div className="form-group col-md-2 text-right">
                  <button type='submit' className="btn btn-primary btn-user">Add</button>
              </div>
              <hr/>
              {/* Small Brief of Services End */}
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
      {/* About Our Company End */}
    </>
  )
}

export default AboutOurServices
