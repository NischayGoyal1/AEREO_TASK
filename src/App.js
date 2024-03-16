import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Map from './components/Map';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchAPI } from './redux/MovieSlice';


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(FetchAPI());
  },[])
 
  return (
   <>
   <div className="container">
   <Navbar></Navbar>
    <Map></Map>
   </div>

   </>
  );
}

export default App;
