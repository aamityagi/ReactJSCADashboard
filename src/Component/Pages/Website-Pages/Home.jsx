import React from 'react'

const Home = () => {
  return (
    <>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Home Page</h1>
        </div>
        {/* Home Banner Start */}
        <div className="col-lg-12">
            <div className="p-5">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Home Banner</h1>
                </div>
                <form className='row'>
                    <div className="form-group col-md-4">
                        <input
                        type="text"
                        className="form-control"
                        id="heading1"
                        aria-describedby="emailHelp"
                        placeholder="Banner Small Title"
                        required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                        type="text"
                        className="form-control"
                        id="heading2"
                        placeholder="Banner Big Title"
                        required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                        type="text"
                        className="form-control"
                        id="pageSlidID"
                        placeholder="Section ID"
                        required
                        />
                    </div>
                    <button type='submit' className="btn btn-primary btn-user">Banner Submit</button>
                </form>
            </div>
        </div>
        {/* Home Banner End */}
        {/* Video Banner Start */}
        <div className="col-lg-12">
            <div className="p-5 pt-0">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Video Banner</h1>
                </div>
                <form className='row'>
                    <div className="form-group col-md-10">
                        <input
                        type="text"
                        className="form-control"
                        id="videoUrl"
                        aria-describedby="videoUrl"
                        placeholder="Enter Youtube Video URL"
                        required
                        />
                    </div>
                    <div className="form-group col-md-2 text-right">
                        <button type='submit' className="btn btn-primary btn-user">Add</button>
                    </div>
                    <button type='submit' className="btn btn-primary btn-user">Video URL Submit</button>
                </form>
            </div>
        </div>
        {/* Video Banner End */}
        {/* Let's work together Start */}
        <div className="col-lg-12">
            <div className="p-5 pt-0">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Let's work together</h1>
                </div>
                <form className='row'>
                    <div className="form-group col-md-4">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                <label class="custom-file-label" for="inputGroupFile01">Choose Icon</label>
                            </div>
                        </div>      
                    </div>
                    <div className="form-group col-md-2">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Title"
                        required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <textarea
                        type="text"
                        className="form-control"
                        placeholder="Enter Description"
                        required
                        rows="1"
                        />
                    </div>
                    <div className="form-group col-md-2 text-right">
                        <button type='submit' className="btn btn-primary btn-user">Add</button>
                    </div>
                    <button type='submit' className="btn btn-primary btn-user">Video URL Submit</button>
                </form>
            </div>
        </div>
        {/* Let's work together End */}
    </>
  )
}

export default Home
