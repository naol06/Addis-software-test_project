import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const {id}=useParams()
  const navigate=useNavigate()
    const dataup=useSelector(state=>state.updateData)
    const [data, setdata] = useState({
        song:dataup.song, 
        singer:dataup.singer,
        rating:dataup.rating,
        songDescription:dataup.songDescription,
    });
    const handleUpdate = (e) => {
      e.preventDefault()
      axios.put('http://localhost:3001/items/' + id, data)
          .then(res => {
             navigate("/")
          })
          .catch(err => console.log(err))
  }

    return (
        <div className='d-flex align-items-center justify-content-center vh-100'>
       
        <div className='w-50 border p-5 bg-secondary rounded '>
        <div className='d-flex align-items-center justify-content-center v' ><h1>Update Song</h1></div>
        <form onSubmit={handleUpdate}>
        <div className="form-group">
          <input type="text" value={data.song} onChange={e=>setdata({...data,song:e.target.value})} className="form-control" placeholder="Enter Song Title" required/>
        </div>
        <div className="form-group my-2">
          <input type="text" value={data.singer}onChange={e=>setdata({...data,singer:e.target.value})} className="form-control " placeholder="Enter Singer Name" required/>
        </div>
        <div className="form-group">
        <input type="number" value={data.rating}onChange={e=>setdata({...data,rating:e.target.value})} className="form-control" placeholder="Enter Song Rating" required/>
      </div>
      <div className="form-group my-2">
      <textarea  className="form-control "value={data.songDescription} onChange={e=>setdata({...data,songDescription:e.target.value})} placeholder="Enter Song Description" required/>
    </div>
   
    <div className='d-flex align-items-center justify-content-center '>
    <button type="submit" className="w-50 btn btn-dark">Update Song</button>
    </div>
      </form>
      </div>
      </div>
    
      )
}

export default Update