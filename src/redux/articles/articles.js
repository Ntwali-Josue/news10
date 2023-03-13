import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allArticles: [],
};

const articles = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticles: (state, actions) => {
      state.allArticles = actions.payload;
    },
  },
});

export const { getArticles } = articles.actions;

export const fetchArticles = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://newsapi.org/v2/top-headlines?q=us&apiKey=f3a846d8d0a549d3b3b8a2360c597f26&pageSize=10"
  );
//   console.log(data);
  dispatch(getArticles(data.articles));
};

export default articles.reducer
