
import './App.css';
import './General.css'
import {Routes,Route } from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import Favority from './Favority';
import CreateMusic from './CreateMusic';
import Update from './Update';
import ReadSong from './ReadSong';
import NotFoundPage from './NotFoundPage';
function App() {
  return (
    
    <Routes>
    <Route path='/'element={<div><Header/><Home/></div>}/>
    <Route path='/favority'element={<div><Header fav/><Favority/></div>}/>
    <Route path='/add'element={<div><Header pos fav/><CreateMusic/></div>}/>
    <Route path='/update/:id'element={<div><Header pos fav/><Update/></div>}/>
    <Route path='/view'element={<div><Header  fav/><ReadSong/></div>}/>
    <Route path="*"  element={<NotFoundPage />} />
    </Routes>
 
  );
}

export default App;
