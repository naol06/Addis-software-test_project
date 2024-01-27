import React from 'react'
import { Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, updateData } from './Ridux/actionManager';
import { useNavigate } from 'react-router-dom';
function ReadSong() {
    const data= useSelector(state=>state.updateData)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    console.log(data);
    return (
        <div className='d-flex justify-content-center   mt-1'>
       {data? <div  className='border p-4 w-50 ' >
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex justify-content-center'>
      <strong >{data.singer}</strong> :  <div className='mx-2 product_rating'>
      {Array(data.rating).fill().map(()=>{
       return <p className="bi painte painte bi-star-fill"></p>
    })}
      </div>
      
       </div>
          <Card.Img variant="top" src={data.image} />
          </div>
          <Card.Body>
            <p><strong> {data.song}:</strong>{data.songDescription}</p>
           <div className='d-flex justify-content-center '>
           <button type="button" onClick={()=>dispatch(updateData({song:data.song,singer:data.singer,songDescription:data.songDescription,rating:data.rating ,image:data.image,id:data.id})) && navigate('/update')} className="btn btn-info mx-2">update</button>
            <button type="button" onClick={()=>dispatch(addToFav({song:data.song,singer:data.singer,songDescription:data.songDescription,rating:data.rating ,image:data.image,id:data.id}))} className="btn btn-warning mx-2">+ favority</button>
            </div>
          </Card.Body>
          
        </div>:<div><h1>Dear user there is no data in View component</h1></div>}
        </div>
      );
}

export default ReadSong