import React from 'react'

const ServicesUnlock = () => {
  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Services Unlock</h1>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card mb-2'>
            <div className='card-body'>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <p className='m-0 bold'>Daily Update <br/>
                    <span className='small'>
                      Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
                    </span>
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className='card mb-2'>
            <div className='card-body'>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <p className='m-0 bold'>Take Two Services Get 20% Discount on the Same <br/>
                    <span className='small'>
                      Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
                    </span>
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesUnlock
