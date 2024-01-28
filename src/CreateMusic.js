import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateMusic() {
  const navigate=useNavigate()
  const [data, setdata] = useState({
    song:"",
    singer:"",
    rating:null,
    songDescription:"",
  });
  const handlForm=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/items",data)
    .then(res=>{
navigate('/')
    })
    .catch(err=>{
      console.log(err);
    })

  }
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
   
    <div className='w-50 border p-5 bg-secondary rounded '>
    <div className='d-flex align-items-center justify-content-center v' ><h1>Create Song</h1></div>
    <form onSubmit={handlForm}>
    <div className="form-group">
      <input type="text" className="form-control" onChange={e=>setdata({...data, song:e.target.value})} placeholder="Enter Song Title" required/>
    </div>
    <div className="form-group my-2">
      <input type="text" className="form-control " onChange={e=>setdata({...data, singer:e.target.value})} placeholder="Enter Singer Name" required/>
    </div>
    <div className="form-group">
    <input type="number" className="form-control" min="1" max="5" onChange={e=>setdata({...data, rating:e.target.value})} placeholder="Enter Song Rating" required/>
  </div>
  <div className="form-group my-2">
  <textarea  className="form-control  " onChange={e=>setdata({...data, songDescription:e.target.value})} placeholder="Enter Song Description" required/>
</div>

<div className='d-flex align-items-center justify-content-center '>
<button type="submit"  className="w-50 btn btn-dark">Add Song</button>
</div>

  </form>
  </div>
  </div>

  )
}

export default CreateMusic