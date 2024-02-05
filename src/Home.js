import React, {useState, useEffect } from 'react'
import SongList from './SongList'
import axios from 'axios'
function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
  axios.get('https://addis-project.onrender.com/items')
 .then(res=>{
 setdata(res.data)
 })
  }, []);
  return (<div>{data.length>0 ? <div className='row' >
 {data .map((list,i)=>{
 return < >
  <SongList
  id={list.id}
  song={list.song}
  singer={list.singer}
  songDescription={list.songDescription}
  rating={list.rating}
  />
  </>
 })}
    </div> : <div className='d-flex justify-content-center m-2 align-items-center vh-100' >
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  </div>
  </div>}
    </div>
  )
}

export default Home