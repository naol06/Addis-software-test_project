import React from 'react'
import { useNavigate } from 'react-router-dom'
function NotFoundPage() {
   
    const navigate=useNavigate()
    const handleGoPage=()=>{
  
   navigate('/')
 
    }
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
    <div>
    <img className='image404' src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif' alt='notFound'/>
   <h1>Dear Customer this page is not found</h1>

    <div>
    <button type="button" onClick={handleGoPage} className="btn w-100 btn-dark">Back</button>
    </div>
    </div>
    </div>
  )
}

export default NotFoundPage