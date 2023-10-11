import React from 'react'

const Contact = () => {
  return (
    <>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Contact Page</h1>
        </div>
        {/* Page Contant Update Start */}
        <form>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Sub Heading"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Main Heading"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Map Location Emb"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
    </>
  )
}

export default Contact
