import React from 'react'
import { useNavigate } from 'react-router-dom'
function NotFoundPage() {
   
    const navigate=useNavigate()
    const handleGoPage=()=>{
  
   navigate('/')
 
    }
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
    <div className='m-3'>
    <img className='image404' src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif' alt='notFound'/>
   <h1 className='mx-3'>Dear Customer this page is not found</h1>

    <div className='justify-content-center align-items-center d-flex'>
    <button type="button" onClick={handleGoPage} className="btn w-75  btn-dark">Back</button>
    </div>
    </div>
    </div>
  )
}

export default NotFoundPage