import React, { useState } from 'react'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import {AiOutlineDelete} from 'react-icons/ai'
import ContentEditor from '../../../Common/ContentEditor/ContentEditor'
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate'
const AddServices = (props) => {
  const axiosPrivate = useAxiosPrivate()
  const editFormData = props.editServiceData
  console.log(editFormData)
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [editorDescription, setEditorDescription] = useState();
  const [formValue, setFormValue] = useState({
    serviceType: '',
    serviceName: '',
    smallDescription: '',
    serviceAmount: '',
    servicesOfferType: '',
    serviceOffer: '',
    fullDescription: '',
    faq:[{
      enterQuestion:"",
      enterAnswer:""
    }]
  })
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({...formValue, [name]: value});
  }
  // Create Service
  const createService =  async (e) => {
    e.preventDefault();
    const allInputValue = {
      service_type: formValue.serviceType,
      service_name: formValue.serviceName,
      small_description: formValue.smallDescription,
      service_price: formValue.serviceAmount,
      discount_type: formValue.servicesOfferType,
      discount: formValue.serviceOffer,
      description: editorDescription,
      faq: QuestionAnswer.map((QA)=> {
        return ({
          question: QA.enterQuestion,
          answer:QA.enterAnswer
        })
      })
    };
    
    try{
      setLoading(true)
      await axiosPrivate.post(`${process.env.REACT_APP_Services}`, allInputValue)
      props.onComplete();
      setFormValue('')
    }
    catch(error) {
      setError(error)
    }
    finally{
      setLoading(false)
    }
  }
  const updateService =async(e) => {
    e.preventDefault();
    const allInputValue = {
      service_type: formValue.serviceType,
      service_name: formValue.serviceName,
      small_description: formValue.smallDescription,
      service_price: formValue.serviceAmount,
      discount_type: formValue.servicesOfferType,
      discount: formValue.serviceOffer,
      description: editorDescription,
    };
    
    try{
      await axiosPrivate.put(`${process.env.REACT_APP_GET_ALL_Services_By_ID}${editFormData.data.data.id}`, allInputValue)
      .then(response => {
        if(response?.status === 201){
          window.location.reload(true)
        }
      })
    }
    catch(error) {
      console.log(error)
    }
  }
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
      <div className="modal fade" id="addServices" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <div className="alert alert-primary d-inline-block pt-1 pb-1" role="alert">
                      Service Amount :- <span className='bold'>0</span>
                    </div>
                    <div className="alert alert-success d-inline-block pt-1 pb-1 ml-2" role="alert">
                      After Discount :- <span className='bold'>0</span>
                    </div>
                  </div>
                  {/* Service Amount and After Discount End */}
                </div>
                <form>
                  <div className='row'>
                    {/* Service Amount and After Discount Start */}
                      {props?.editServiceData?.data 
                        ? <div className="form-group col-md-4 d-none">
                            <input
                              type="text"
                              required
                              name='serviceId'
                              value={editFormData?.data.data.id}
                              placeholder={`${editFormData?.data.data.id}`}
                            />
                          </div>
                        : <></>
                      }
                    <div className="form-group col-md-4">
                      <label className='small'>Service Type</label>
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Service Type"
                      required
                      name='serviceType'
                      onChange={handleChange}
                      value={formValue.serviceType || ''}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label className='small'>Service Name</label>
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Service Name"
                      required
                      name='serviceName'
                      onChange={handleChange}
                      value={formValue.serviceName || ''}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label className='small'>Small Description</label>
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Small Description"
                      required
                      name='smallDescription'
                      onChange={handleChange}
                      value={formValue.smallDescription || ''}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label className='small'>Service Amount</label>
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Service Amount"
                      required
                      name='serviceAmount'
                      onChange={handleChange}
                      value={formValue.serviceAmount || ''}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label className='small'>Select Offer Type</label>
                      <select className="form-control"name='servicesOfferType'
                        onChange={handleChange}
                        value={formValue.servicesOfferType
                          || ''}>
                          <option value="N/A">Select Offer Type</option>
                          <option value="%">% Off</option>
                          <option value="2">Fixed Off</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label className='small'>Amount/Percentage</label>
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Amount / %"
                      required
                      name='serviceOffer'
                      onChange={handleChange}
                      value={formValue.serviceOffer || ''}
                      />
                    </div>
                  </div>
                  {/* Text Editor Start */}
                  <div className='row'>
                    <div className='col-md-12 mb-4'>
                      <label className='small'>Enter Full Description</label>
                      <ContentEditor 
                        // editDescription={editFormData.data.data.description}
                        setEditorDescription={setEditorDescription}
                        placeholder={"Enter Services Content"} />
                    </div>
                  </div>
                  {/* Text Editor End */}
                  {/* Add Q&A Start */}
                  <div className='row'>
                    <div className='col-md-12'>
                      <label className='small'>Enter FAQ</label>
                      { QuestionAnswer.map((x,i) => {
                            return(
                                <div className='row' key={i}>   
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
                    </div>
                  </div>
                  {/* Add Q&A End */}
                  <div className='row'>
                    <div className='col-md-12 text-center'>
                      {loading 
                        ? "Loading...." 
                        :<button type="button" onClick={createService} className="btn btn-primary">
                            Create Service
                          </button>
                        } 
                    </div>
                  </div>
                </form>
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
