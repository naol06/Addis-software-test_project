import React, {useState, useEffect } from 'react'
import SongList from './SongList'
import axios from 'axios'
function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
  axios.get('http://localhost:3001/items')
 .then(res=>{
 setdata(res.data)
 })
  }, []);
  return (
    <div className='row' >
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
    </div>
  )
}

export default Home