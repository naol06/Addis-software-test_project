import React from 'react'
import SongList from './SongList'

function Home() {
  return (
    <div className='row'>
      <SongList
      id={1}
      song="Hope"
      image="https://th.bing.com/th/id/OIP.QMjbYP6DkKUoUvkGTt6XSAHaE8?rs=1&pid=ImgDetMain"
      singer="XXXTentacion"
      songDescription=" One of his most popular songs is “Hope,” which was 
      released in 2018 and"
      rating={5}
      />
      <SongList
      id={2}
      song="God's Plan"
      image="https://static.billboard.com/files/media/02-drake-photo-gallery-2018-billboard-1548-compressed.jpg"
      singer="Darek"
      songDescription=" is One of his most popular songs  which was 
      released in 2017 and
     "
      rating={4}
      />
      <SongList
      id={3}
      singer="Billie Eilish"
      song="Look at Him"
      image="https://th.bing.com/th/id/R.ee305f25b7f90b6a32edfdea94b0fea3?rik=bW2RFdXmwm9Q8g&pid=ImgRaw&r=0"
      songDescription=" is One of his most popular songs  which was 
      released in 2020"
      rating={3}
      />
      <SongList
      id={4}
      singer="Snoop Dog"
      song="Rap good"
      image="https://th.bing.com/th/id/OIP.af55OJtVnvwUIlXWDPdVbQHaEK?rs=1&pid=ImgDetMain"
      songDescription=" is One of his most popular songs  which was 
      released in 2020"
      rating={5}
      />
 

    
    
    </div>
  )
}

export default Home