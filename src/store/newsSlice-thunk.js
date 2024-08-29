/* 
axios we can use  */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
const initialState={
  news: [],
  loading: false,
  error: false,
}
const API = import.meta.env.VITE_API_KEY;
 /* utiliti or helper: */
 // createAsyncThunk is a utility provided by Redux Toolkit to handle asynchronous operations in Redux.
 /*                                           name of action and async fun     */
 /*redux is pure func (cannot make async func like fetch the data)so we need :
 thunkApi:object inside (createAsyncThunk)  we can access alot of thing like dispatsh 
 rejectWithValue:to use it for to catch and show the error*/
export const getNews= createAsyncThunk(
    "getNews",
    async (thunkApi, { rejectWithValue }) => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=${API}`;
     
        try {
            const { data } = await axios(url);
            console.log(data);
            return data.articles;
          } catch (error) {
            console.log(error);
            return rejectWithValue("something went wrong");
          }
    
    
    });


const newsSlice=createSlice({
  name: "news",
  initialState,
  reducers: {         /*here we put all the action wich we needed */
    clearnews(state) {      /* action  spesify how  change the state ,when we in home and want to make logout , it clear the News   */
       state.news = [];
    },
  },        /* 3 cases handel the request of fatching api  */
  //   here we are handling the 3 cases of the request we made (fetching the url) 1-pending ,2-fullfilled 3-rejected
    extraReducers: (builder) => {    /* what i waite from api  , i need here 3 cases to update 3 states (loading ,news,error) */
       //   builder is an object lets u acess addcase
      builder        /* here update the state direct in the extrareducers */
        .addCase(getNews.pending, (state) => {    /* loading */
          state.loading = true;
        })
        .addCase(getNews.fulfilled, (state, action) => {  /* successe */
          state.news = action.payload;  /* put what it  fetching and put it in news */
          state.loading = false;
        })   
        .addCase(getNews.rejected, (state, action) => {/* if the fetshing with api rejected */
          state.loading = false;
          state.error = action.payload;
        });
    },
})
/* reducers like employes :just give this state  */
// reducer is a pure function ,inside the reducers we cant fetch data , we cant do async functions
export const newsReducer = newsSlice.reducer;/* includ everything  */
export const { clearnews } = newsSlice.actions;


/* The second argument to the payloadCreator, known as thunkApi, is an object containing references to the dispatch, getState, and extra arguments from the thunk middleware as well as a utility function called rejectWithValue. */


/* reducer is apure func wich canot make async func so i need to use (createAsyncThunk is a func has 2 parameter (name of the async func and the async func)
async func (thunkApi, { rejectWithValue })
                 for dispatch     for catch the error */