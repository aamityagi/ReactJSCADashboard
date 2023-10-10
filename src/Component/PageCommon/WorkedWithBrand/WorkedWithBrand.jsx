import React from 'react'

const WorkedWithBrand = () => {
  return (
    <>
    {/* Team Start */}
    <div className="col-lg-12">
        <div className="p-5">
          <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">Work With <span className='bold h2'>Global Largest Brands</span></h1>
          </div>
          <form className='row'>
              <div className="form-group col-md-12">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Big Title"
                  required
                  />
              </div>
              {/* Team Member Details Start */}
              <hr/>
              <div className="form-group col-md-4">
                <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                      </div>
                      <div class="custom-file">
                          <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                          <label class="custom-file-label" for="inputGroupFile01">Brand Logo</label>
                      </div>
                  </div> 
              </div>
              <div className="form-group col-md-3">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Brand Name"
                  required
                  />
              </div>
              <div className="form-group col-md-3">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Brand Website Link"
                  required
                  />
              </div>
              <div className="form-group col-md-2 text-right">
                  <button type='submit' className="btn btn-primary btn-user">Add Brand</button>
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
      {/* Team End */}
    </>
  )
}

export default WorkedWithBrand
