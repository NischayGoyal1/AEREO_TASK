import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {Entermovie, FetchAPI} from "../redux/MovieSlice"
import { isMarkerVal } from '../redux/MovieSlice';
import {toast} from "react-toastify";

const Navbar = () => {
    const [input,setInput]=useState('')

    const item=useSelector((state)=>state.movieData.data);
    const [suggestions, setSuggestions] = useState([]);
    
    const dispatch=useDispatch();
    const handlesearch=()=>{
      if(input==='')
      toast.error("Please Enter the Movie Name :) ",{position: "bottom-right"})
    else
        {const obj=item.find(o=>o.title===input)
        // console.log(obj);
       
        if(obj===undefined)
        toast.error("Movie Not Found",{position: "bottom-right"})
        else
        {dispatch(Entermovie(obj));
        dispatch(isMarkerVal(true));}}
    }
    const AutoComplete=(title)=>{
      setSuggestions([]);
      setInput(title);
      const obj=item.find(o=>o.title===title)
        dispatch(Entermovie(obj));
    }
    const handleInputChange = (e) => {
      const value = e.target.value;
      
      setInput(value);
    
      const filteredSuggestions = item.filter(item =>
          item.title.toLowerCase().startsWith(value.toLowerCase())
      );
      if(value.length===0)
      setSuggestions([]);
      else setSuggestions(filteredSuggestions);
  };
    
  return (
    <>  
      <div className='nav'>
          <h1>SF Movies</h1>
          <div className="searchbar">
        <input type="text" value={input} onChange={handleInputChange}  placeholder='Search...'/>
        <button onClick={handlesearch}>Search</button>
        {
          suggestions.length>0 &&( <div className="dropdown" >
           { suggestions.slice(0,12).map((e,index)=>(
              <div class="dropdown-item" onClick={()=>{AutoComplete(e.title)}}>{e.title}</div>
            ))}
          </div>)
        }
    </div>
        
      </div>

    </>
  )
}

export default Navbar
