import React from 'react'

function CreateMusic() {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
   
    <div className='w-50 border p-5 bg-secondary rounded '>
    <div className='d-flex align-items-center justify-content-center v' ><h1>Create Song</h1></div>
    <form>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Enter Song Name" required/>
    </div>
    <div className="form-group my-2">
      <input type="text" className="form-control " placeholder="Enter Singer Name" required/>
    </div>
    <div className="form-group">
    <input type="number" className="form-control" placeholder="Enter Song Rating" required/>
  </div>
  <div className="form-group my-2">
  <textarea  className="form-control  " placeholder="Enter Song Description" required/>
</div>
<div className="form-group my-2 border bg-white">
  <input type="file" className="  form-control-file"  placeholder="" required />
</div>
<div className='d-flex align-items-center justify-content-center '>
<button type="button" className="w-50 btn btn-dark">Add Song</button>
</div>

  </form>
  </div>
  </div>

  )
}

export default CreateMusic