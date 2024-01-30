import React from 'react'
import { useDispatch } from 'react-redux'
import { addToFav, updateData } from './Ridux/actionManager'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function SongList({id,song,singer,songDescription,rating }) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleDelete=(id,singer)=>{
      const conf=window.confirm(`Do you Want to Delete ${singer}'s Song `)
      if(conf){
        axios.delete("https://addis-project.onrender.com/items/"+id)
        .then(res=>{
alert("you have successfully deleted the song")
window.location.reload()
        })
        .catch(err=>console.log(err))
      }
     
    }
    return (
        <div className='col-lg-4  col-md-6'>
        <div className='Song '>
        <div className='d-flex justify-content-center '>
        <p className='Song_title'><strong>{singer} : </strong></p>
        <div className='Song_rating'>
        {Array(Number(rating)).fill().map(()=>{
         return <p className="bi painte painte bi-star-fill"></p>
      })}
        </div>
        </div>
      
        <div className='Song_info'>
        <p ><strong>{song}</strong></p>
       <p className='Song_title'>{songDescription}</p>
        <p></p>
        </div>
       <div className='d-flex justify-content-center'>
       <button type="button" onClick={()=>dispatch(updateData({song,singer,songDescription,rating ,id})) && navigate('/view')} className="btn btn-primary">View</button>
       <button type="button" onClick={()=>dispatch(updateData({song,singer,songDescription,rating ,id})) && navigate(`/update/${id}`)} className="btn btn-info mx-2">update</button>
       <button type="button" onClick={()=>dispatch(addToFav({song,singer,songDescription,rating ,id}))} className="btn btn-secondary mx-2">+ favority</button>
       <button type="button" onClick={()=>handleDelete(id,singer)} className="btn btn-danger">Delete</button>
       </div>
        </div>
        </div>
      )
}

export default SongList