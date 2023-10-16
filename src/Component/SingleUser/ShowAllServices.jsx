import React from 'react'
import { Link } from 'react-router-dom'
import {PiCurrencyInrBold} from 'react-icons/pi'
import {BsInfoCircle} from 'react-icons/bs'

const ShowAllServices = () => {
  return (
    <>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Services</h1>
        </div>
        <div className='row'>
            {/* Services one Start */}
            <div className='col-md-4 mb-4'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-info">ITR</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Sub Title</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" class="btn btn-success btn-sm btn-icon-split">
                            <span class="icon text-white-50">
                                <PiCurrencyInrBold/>
                            </span>
                            <span class="text">Pay Now</span>
                        </Link>
                        <Link href="#" class="btn btn-info btn-sm btn-icon-split text-white float-right">
                            <span class="icon text-white-50">
                                <BsInfoCircle/>
                            </span>
                            <span class="text">Enquery Now</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Services one End */}
            
            
        </div>
    </>
  )
}

export default ShowAllServices
