import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFav } from './Ridux/actionManager';

function Favority() {
  const favdata=useSelector(state=>state.favData)
 
  const dispatch=useDispatch()
  return (
    <div>
    {favdata.length>0 ? <div className='d-flex row'>
    { favdata.map((data, i)=>{
      return   <div key={i} className='col-lg-4 col-md-6'>
        <div className='product '>
        <div className='d-flex justify-content-center '>
        <p className='product_title'><strong>{data.items.singer} : </strong></p>
        <div className='product_rating'>
        {Array(Number(data.items.rating)).fill().map(()=>{
         return <p className="bi painte painte bi-star-fill"></p>
      })}
        </div>
        </div>
      
        <div className='product_info'>
        <p ><strong>{data.items.song}</strong></p>
       <p className='product_title'>{data.items.songDescription}</p>
       <div className='d-flex justify-content-center'>
       <Button type='button' onClick={()=>dispatch(removeFromFav(data.items.id))}  variant="primary">Remove from Favorites</Button>
       </div>
       </div>
        </div>
        </div>

    })}
    </div>
    : <div className='d-flex justify-content-center'>
     <h1>You have no Favority song</h1>
     </div>}
     </div>
    
  );
  }

export default Favority;

