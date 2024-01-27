import React from 'react'
import { useDispatch } from 'react-redux'
import { addToFav, updateData } from './Ridux/actionManager'
import { useNavigate } from 'react-router-dom'

function SongList({id,song,singer,songDescription,rating ,image}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return (
        <div className='col-lg-4  col-md-6'>
        <div className='product '>
        <div className='d-flex justify-content-center '>
        <p className='product_title'><strong>{singer} : </strong></p>
        <div className='product_rating'>
        {Array(rating).fill().map(()=>{
         return <p className="bi painte painte bi-star-fill"></p>
      })}
        </div>
        </div>
        <img className='product_image' src={image} alt=''/>
        <div className='product_info'>
        <p ><strong>{song}</strong></p>
       <p className='product_title'>{songDescription}</p>
        <p></p>
        </div>
       <div className='d-flex justify-content-center'>
       <button type="button" onClick={()=>dispatch(updateData({song,singer,songDescription,rating ,image,id})) && navigate('/view')} className="btn btn-primary">View</button>
       <button type="button" onClick={()=>dispatch(updateData({song,singer,songDescription,rating ,image,id})) && navigate('/update')} className="btn btn-info mx-2">update</button>
       <button type="button" onClick={()=>dispatch(addToFav({song,singer,songDescription,rating ,image,id}))} className="btn btn-secondary mx-2">+ favority</button>
       <button type="button" className="btn btn-danger">Delete</button>
       </div>
        </div>
        </div>
      )
}

export default SongList