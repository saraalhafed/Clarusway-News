
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  news: [],
  error: false,
  loading: false,
};
const API = import.meta.env.VITE_API_KEY;
// Check if the key is correctly output

// createAsyncThunk is a utility provided by Redux Toolkit to handle asynchronous operations in Redux.

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // core requirement is to update the state
    fetchNews(state, action) {
      // once I have the data, I want to update the state
      state.news = action.payload;
      state.loading = false;
      state.error = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearnews(state) {
      state.news = [];
    },
  },
});

// async actions
export const getNews = () => {
  return async (dispatch) => {  /* here update the state throw dispatch not direct in reducers */
    const url = `
https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`;
    try {

       // in the thunk, we can access the state directly,(update state inside the extrareducers)
      // in async actions, we can not access the state directly(update inside async func)
      // therefore, we need to use dispatch to update the state

      // first upate loading state into true
      dispatch(newsSlice.actions.setLoading(true)); /* only dispatcjh can access the state and update ,fetchnews outside the newsSlice */
      const { data } = await axios.get(url);
      // once I have the data, I want to update the state for news
      dispatch(newsSlice.actions.fetchNews(data.articles));
      // update loading state into false
      dispatch(newsSlice.actions.setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(newsSlice.actions.setLoading(true));
      dispatch(newsSlice.actions.setError('Something went wrong!'));
    }
  };
};

export const newsReducer = newsSlice.reducer;
export const { clearnews } = newsSlice.actions;

/* when i have the response ready than i can update my state  */