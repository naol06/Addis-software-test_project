import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header({fav,pos}) {
  const favdata=useSelector(state=>state.favData)
    return (
        <div className={`header  w-sm-100 responsive ${pos &&"position-fixed"}`} >
        <div className='header_home'>
        <Link target='' className='text-decoration-none text-white' to={'/'}>
        <p><i className="bi bi-house">Home</i></p>
        </Link>
        </div>
        <div className='d-flex justify-content center '>
       {!fav && <Link   to={"/add"} className='text-decoration-none text-white'>
        <div className='mx-2'><i className="bi bi-music-note-beamed mx-4">+</i></div>
        </Link>}
        <Link className='text-decoration-none text-white ' to='/favority'>
        <p><i className="bi bi-heart-fill "><small className='fs-5 '>{favdata.length}</small></i></p>
        </Link>
      
        </div>
        </div>
      )
}

export default Header