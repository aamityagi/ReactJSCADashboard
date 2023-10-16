import React, { useState } from 'react'
import {GrAdd} from 'react-icons/gr'
import {AiOutlineDelete} from 'react-icons/ai'
import VideoSlider from './common/VideoSlider/VideoSlider'
const Home = () => {
    
    // Let's work together Use State
    const [iconTitleDescription, setIconTitleDescription] = useState([{iconAdd:'',enterTitle:'',enterDescription: ''}])

    // Let Us Work To Gether Start
    const handleLetUsWorkToGetherInput = (e, i) => {
        const {name, value} = e.target;
        const list = [...iconTitleDescription];
        list[i][name] = value; 
        setIconTitleDescription(list);
    }
    const handleadAddLetsWorkTogether = () => {
        setIconTitleDescription([...iconTitleDescription, {iconAdd:'',enterTitle:'',enterDescription: ''}]);
    }
    const handleadRemoveLetsWorkTogether = (i) => {
        const list = [...iconTitleDescription];
        list.splice(i,1);
        setIconTitleDescription(list);
    }
    // Let Us Work To Gether End
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
        <hr/>
        {/* Video Banner Start */}
        <VideoSlider/>
        {/* Video Banner End */}
        <hr/>
        {/* Let's work together Start */}
        <div className="col-lg-12 mt-4">
            <div className="p-5 pt-0">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Let's work together</h1>
                </div>
                <form className='w-100 position-relative'>
                    { iconTitleDescription.map((x,i) => {
                        return(
                            <div className='row' key={x}>   
                                <div className="form-group col-md-4">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Upload</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" name='iconAdd' class="custom-file-input" onChange={(e) => handleLetUsWorkToGetherInput(e, i)}/>
                                            <label class="custom-file-label">Choose Icon</label>
                                        </div>
                                    </div>      
                                </div>
                                <div className="form-group col-md-2">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Title"
                                    required
                                    name='enterTitle'
                                    onChange={(e) => handleLetUsWorkToGetherInput(e, i)}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Description"
                                    required
                                    rows="1"
                                    name='enterDescription'
                                    onChange={(e) => handleLetUsWorkToGetherInput(e, i)}
                                    />
                                </div>
                                <div className="form-group col-md-2 text-right">
                                    {iconTitleDescription.length-1===i &&
                                        <button onClick={handleadAddLetsWorkTogether} type='button' className="btn btn-primary btn-user mr-2"><GrAdd color="#fff"/></button>
                                    }
                                    { iconTitleDescription.length !== 1 &&
                                        <button onClick={handleadRemoveLetsWorkTogether} type='button' className="btn btn-danger btn-user"><AiOutlineDelete/></button>
                                    }
                                </div>
                            </div> 
                        )
                    })
                    }
                    <button type='submit' className="btn btn-primary m-auto d-block">Submit</button>
                </form>
            </div>
        </div>
        {/* Let's work together End */}
    </>
  )
}

export default Home
