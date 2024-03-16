import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Map from './components/Map';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAPI } from './redux/MovieSlice';


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(FetchAPI());
  },[])

  const {isError,isLoading}=useSelector((state)=>state.movieData);


  if(isLoading)return <h1>Loading.....</h1>

  if(isError)return <h1>404 OOPS....</h1>
 
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
