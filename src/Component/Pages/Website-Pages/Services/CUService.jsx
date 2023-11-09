import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import ContentEditor from '../../../Common/ContentEditor/ContentEditor'
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate'
const CUService = (props) => {
    const axiosPrivate = useAxiosPrivate()
    const [editorDescription, setEditorDescription] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    console.log(props.editData)
    const schema = yup.object({
        service_type: yup.string().required("Enter Name"),
        service_name: yup.string().required("Enter Service Name"),
        small_description: yup.string().required("Enter Small Description"),
        service_price: yup.string().required("Enter Service Price"),
        discount_type: yup.string().oneOf(["%", "Fixed"]),
        discount: yup.string().required("Enter discount"),
    });
    const formObj = useForm({
        defaultValues:{
            service_type: props.editData?.serviceType || "", 
            service_name: "",
            small_description: "",
            service_price: "",
            discount_type: "",
            discount: "",
            description: ""
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = formObj.handleSubmit(async (data)=>{
        console.log("Final Data",  data)
        try{
            setLoading(true)
            await axiosPrivate.post(`${process.env.REACT_APP_Services}`, data);
            props.onComplete()
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    })
  return (
    <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className="form-group col-md-4">
                <label className='small'>Service Type</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Service Type"
                    name='serviceType'
                    {...formObj.register("service_type")}
                />
                {formObj.formState.errors.service_type && 
                <div>{formObj.formState.errors.service_type.message}</div>}
            </div>
            <div className="form-group col-md-4">
                <label className='small'>Service Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Service Name"
                    {...formObj.register("service_name")}
                />
                {formObj.formState.errors.service_name && 
                <div>{formObj.formState.errors.service_name.message}</div>}
            </div>
            <div className="form-group col-md-4">
                <label className='small'>Small Description</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Small Description"
                    {...formObj.register("small_description")}
                />
                {formObj.formState.errors.small_description && 
                <div>{formObj.formState.errors.small_description.message}</div>}
            </div>
            <div className="form-group col-md-4">
                <label className='small'>Service Amount</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Service Amount"
                    {...formObj.register("service_price")}
                />
                {formObj.formState.errors.service_price && 
                <div>{formObj.formState.errors.service_price.message}</div>}
            </div>
            <div className="form-group col-md-4">
                <label className='small'>Select Offer Type</label>
                <select className="form-control" name='discount_type' 
                    {...formObj.register("discount_type")}>
                    <option value="">Select Offer Type</option>
                    <option value="%">% Off</option>
                    <option value="Fixed">Fixed Off</option>
                </select>
                {formObj.formState.errors.discount_type && 
                <div>{formObj.formState.errors.discount_type.message}</div>}
            </div>
            <div className="form-group col-md-4">
                <label className='small'>Amount/Percentage</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Amount / %"
                    {...formObj.register("discount")}
                />
                {formObj.formState.errors.discount && 
                <div>{formObj.formState.errors.discount.message}</div>}
            </div>
        </div>
        {/* Text Editor Start */}
        <div className='row'>
            <div className='col-md-12 mb-4'>
                <label className='small'>Enter Full Description</label>
                <ContentEditor placeholder={"Enter Services Content"} {...formObj.register("description")}/>
            </div>
        </div>
        {/* Text Editor End */}
        <div className='row'>
            <div className='col-md-12'>
                {loading ? "Loadding...." : 
                    <button type="submit" className="btn btn-primary">
                        Create Service
                    </button>
                }
                {error && (
                    <div>{error}</div>
                )}
            </div>
        </div>
    </form>
  )
}

export default CUService
