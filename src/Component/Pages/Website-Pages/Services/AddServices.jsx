import React, { useState } from 'react'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import {AiOutlineDelete} from 'react-icons/ai'
import ContentEditor from '../../../Common/ContentEditor/ContentEditor'
const AddServices = () => {
  // Let's work together Use State
  const [QuestionAnswer, setQuestionAnswer] = useState([{enterQuestion:'',enterAnswer: ''}])

  // Let Us Work To Gether Start
  const handleQandAInput = (e, i) => {
    const {name, value} = e.target;
    const list = [...QuestionAnswer];
    list[i][name] = value; 
    setQuestionAnswer(list);
}
const handleadAddQuestionAnswer = () => {
  setQuestionAnswer([...QuestionAnswer, {enterQuestion:'',enterAnswer: ''}]);
}
const handleadRemoveQuestionAnswer = (i) => {
    const list = [...QuestionAnswer];
    list.splice(i,1);
    setQuestionAnswer(list);
}
// Let Us Work To Gether End
  return (
    <>
      {/* Add Services Form */}
      <div className="modal fade" id="addServices" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create Service</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <div className='row'>
                  {/* Service Amount and After Discount Start */}
                  <div className='col-md-12 text-right'>
                    <div class="alert alert-primary d-inline-block pt-1 pb-1" role="alert">
                      Service Amount :- <span className='bold'>0</span>
                    </div>
                    <div class="alert alert-success d-inline-block pt-1 pb-1 ml-2" role="alert">
                      After Discount :- <span className='bold'>0</span>
                    </div>
                  </div>
                  {/* Service Amount and After Discount End */}
                </div>
                <div className='row'>
                  {/* Service Amount and After Discount Start */}
                  <div className="form-group col-md-4">
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Service Type"
                      required
                      name='serviceType'
                      />
                  </div>
                  <div className="form-group col-md-4">
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Service Name"
                      required
                      name='serviceName'
                      />
                  </div>
                  <div className="form-group col-md-4">
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Small Description"
                      required
                      name='serviceName'
                      />
                  </div>
                  <div className="form-group col-md-4">
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Service Amount"
                      required
                      name='serviceAmount'
                      />
                  </div>
                  <div className="form-group col-md-4">
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Service Offer"
                      required
                      name='serviceOffer'
                      />
                  </div>
                  <div className="form-group col-md-4">
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Amount / %"
                      required
                      name='amountPercentage'
                      />
                  </div>
                </div>
                {/* Text Editor Start */}
                <div className='row'>
                  <div className='col-md-12 mb-4'>
                    <ContentEditor/>
                  </div>
                </div>
                {/* Text Editor End */}
                {/* Add Q&A Start */}
                { QuestionAnswer.map((x,i) => {
                      return(
                          <div className='row' key={x}>   
                              <div className="form-group col-md-4">
                                  <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Question"
                                  required
                                  name='enterQuestion'
                                  onChange={(e) => handleQandAInput(e, i)}
                                  />
                              </div>
                              <div className="form-group col-md-6">
                                  <textarea
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Answer"
                                  required
                                  rows="1"
                                  name='enterAnswer'
                                  onChange={(e) => handleQandAInput(e, i)}
                                  />
                              </div>
                              <div className="form-group col-md-2 text-right">
                                  {QuestionAnswer.length-1===i &&
                                      <button onClick={handleadAddQuestionAnswer} type='button' className="btn btn-primary btn-user mr-2"><GrAdd color="#fff"/></button>
                                  }
                                  { QuestionAnswer.length !== 1 &&
                                      <button onClick={handleadRemoveQuestionAnswer} type='button' className="btn btn-danger btn-user"><AiOutlineDelete/></button>
                                  }
                              </div>
                          </div> 
                      )
                  })
                  }
                  {/* Add Q&A End */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* Add Services End */}
      {/* Add Services Button Start */}
        <button type="button" className="btn btn-primary btn-sm float-right mb-4" data-toggle="modal" data-target="#addServices">
          <AiOutlineAppstoreAdd/> Add Services
        </button>
      {/* Add Services Button End */}
    </>
  )
}

export default AddServices
