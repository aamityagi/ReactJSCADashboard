import React from 'react'

const AboutShortNotes = () => {
  return (
    <>
      {/* About Short Notes Start */}
      <div className="col-lg-12">
            <div className="p-5">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Small Company Brief Description</h1>
                </div>
                <form className='row'>
                    <div className="form-group col-md-4">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Years Exper."
                        required
                        />
                    </div>
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
                    <div className="form-group col-md-6">
                        <textarea
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <textarea
                        type="text"
                        className="form-control"
                        placeholder="Special Description"
                        required
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Page Link"
                        required
                        />
                    </div>
                    <div className="form-group col-md-10">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Bullet Point"
                        required
                        />
                    </div>
                    <div className="form-group col-md-2 text-right">
                        <button type='submit' className="btn btn-primary btn-user">Add</button>
                    </div>
                    <button type='submit' className="btn btn-primary btn-user">Submit</button>
                </form>
            </div>
        </div>
        {/* About Short Notes End */}
    </>
  )
}

export default AboutShortNotes
