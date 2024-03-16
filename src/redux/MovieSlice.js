import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const FetchAPI=createAsyncThunk("FetchAPI", async()=>{
    try{
        const resp=await axios.get("https://data.sfgov.org/resource/yitu-d5am.json");
        return resp.data;
    }
    catch(error){
        console.log("Error", error);
        throw error;
    }

})



const MovieSlice=createSlice({
    name:"Movie",
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
        isMarker:false,
        movie:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchAPI.pending,(state)=>{
            state.isLoading=true;
        }).addCase(FetchAPI.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        }).addCase(FetchAPI.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        })
    },reducers:{
        isMarkerVal(state,action){
            state.isMarker=action.payload;
        },
        Entermovie(state,action){
            state.movie=action.payload;
        }
    }
})


export const {isMarkerVal,Entermovie} = MovieSlice.actions;
export default MovieSlice.reducer;