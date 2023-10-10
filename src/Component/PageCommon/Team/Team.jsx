import React from 'react'

const Team = () => {
  return (
    <>
    {/* Team Start */}
    <div className="col-lg-12">
        <div className="p-5">
          <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">About <span className='bold h2'>Team</span></h1>
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
              <div className="form-group col-md-12">
                  <textarea
                  type="text"
                  className="form-control"
                  placeholder="Description"
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
                          <label class="custom-file-label" for="inputGroupFile01">Member Image</label>
                      </div>
                  </div> 
              </div>
              <div className="form-group col-md-4">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Member Name"
                  required
                  />
              </div>
              <div className="form-group col-md-4">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  required
                  />
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
              <div className="form-group col-md-12 text-right">
                  <button type='submit' className="btn btn-primary btn-user">Add Team Members</button>
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

export default Team
