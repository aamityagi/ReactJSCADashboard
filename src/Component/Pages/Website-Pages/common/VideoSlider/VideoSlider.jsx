import React, { useState } from 'react'
import {GrAdd} from 'react-icons/gr'
import {AiOutlineDelete} from 'react-icons/ai'
const VideoSlider = () => {
    // Add Video URL Use State
    const [inputVideoUrl, setInputVideoUrl] = useState([{videoUrl:''}])
    // Add Video URL Start
    const handleVideoUrlInputChange = (e, i) => {
        const {name, value} = e.target;
        const list = [...inputVideoUrl];
        list[i][name] = value; 
        setInputVideoUrl(list);
    }
    // Add Video URL
    const handleadAddVideoUrl = () => {
        setInputVideoUrl([...inputVideoUrl, {videoUrl:''}]);
    }
    // Remove Video URL
    const handleadRemoveVideoUrl = (i) => {
        const list = [...inputVideoUrl];
        list.splice(i,1);
        setInputVideoUrl(list);
    }
    // Add Video URL End
  return (
    <div className="col-lg-12 pt-4 pb-4">
            <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Video Banner</h1>
            </div>
            <form className='w-100 position-relative'>
                {
                    inputVideoUrl.map((x, i)=> {
                    return(
                        <div key={x} className='row'>
                            <div className="form-group col-md-10">
                                <input
                                type="text"
                                name='videoUrl'
                                className="form-control"
                                aria-describedby="videoUrl"
                                placeholder="Enter Youtube Video URL"
                                required
                                onChange={(e)=> handleVideoUrlInputChange(e, i)}
                                />
                            </div>
                            <div className="form-group col-md-2 text-right">
                                {inputVideoUrl.length-1===i &&
                                <button onClick={handleadAddVideoUrl} type='button' className="btn btn-primary btn-user mr-2 text-white"><GrAdd/></button>
                                }
                                { inputVideoUrl.length !== 1 &&
                                <button onClick={handleadRemoveVideoUrl} type='button' className="btn btn-danger btn-user"><AiOutlineDelete/></button>
                                }
                            </div>
                        </div>
                    )
                    })
                }
                <button type='submit' className="btn btn-primary m-auto d-block">Submit</button>
            </form>
        </div>
  )
}

export default VideoSlider
