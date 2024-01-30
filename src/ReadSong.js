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
        <div className='d-flex justify-content-center align-items-center  vh-100'>
       {data? <div  className='border p-4 w-75 ' >
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex justify-content-center'>
      <strong >{data.singer}</strong> :  <div className='mx-2 Song_rating'>
      {Array(Number(data.rating)).fill().map(()=>{
       return <p className="bi painte painte bi-star-fill"></p>
    })}
      </div>
      
       </div>
         
          </div>
          <Card.Body>
            <p><strong> {data.song}</strong></p>
            
            <p>{data.songDescription}</p>
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