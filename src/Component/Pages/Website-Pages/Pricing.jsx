import React from 'react'
import PricingDataTable from '../../DataTable/PricingDataTable'

const Pricing = () => {
  return (
    <>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Pricing Page</h1>
        </div>
        {/* Pricing Plane Start */}
        <div className='row'>
            <div className="form-group col-md-6">
                <input type="text" className="form-control" placeholder="Sub Heading"/>
            </div>
            <div className="form-group col-md-6">
                <textarea className="form-control" rows="3" placeholder='Enter Main Heading'></textarea>
            </div>
            <div className="form-group col-md-6">
                <input type="text" className="form-control" placeholder="Highlight Tag"/>
            </div>
            <div className="form-group col-md-6">
                <textarea className="form-control" rows="3" placeholder='Highlight Price plane Heading'></textarea>
            </div>
            <div className="form-group col-md-12 text-center">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#singlePricePlan">
                    Submit
                </button>
            </div>
        </div>
        <hr/>
        <div className='row'>
            <div className='col-md-12'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#singlePricePlan">
                    Add Plan
                </button>
                <PricingDataTable/>
            </div>
        </div>
    </>
  )
}

export default Pricing
