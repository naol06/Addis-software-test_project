import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFav } from './Ridux/actionManager';

function Favority() {
  const favdata=useSelector(state=>state.favData)
 
  const dispatch=useDispatch()
  return (
    <div>
   {favdata.length>0 ? <Card style={{ width: '100%' }}>
    {favdata.map((data, i)=>{
      return  <div key={i} className='m-3'>
      <Row>
        <Col md={4}>
          <Card.Img variant="top" src={data.items.image} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{data.items.song}</Card.Title>
            <Card.Text>
              {data.items.singer}
            </Card.Text>
            <Card.Text>
            <div className='product_rating'>
            {Array(data.items.rating).fill().map(()=>{
             return <p className="bi painte painte bi-star-fill"></p>
          })}
            </div>
             
            </Card.Text>
            <Button type='button' onClick={()=>dispatch(removeFromFav(data.items.id))}  variant="primary">Remove from Favorites</Button>
          </Card.Body>
        </Col>
      </Row>
      </div>
    })}
    </Card>
   : <div className='d-flex justify-content-center'>
    <h1>You have no Favority song</h1>
    </div>}
    </div>
  );
}

export default Favority;

