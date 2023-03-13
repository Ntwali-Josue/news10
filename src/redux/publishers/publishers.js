import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "f3a846d8d0a549d3b3b8a2360c597f26";

const initialState = {
  publisherArticles: [],
};

const publisherArticles = createSlice({
  name: "publisherArticles",
  initialState,
  reducers: {
    getPublishers: (state, action) => {
      state.publisherArticles = action.payload;
    },
  },
});

export const { getPublishers } = publisherArticles.actions;

export const fetchPublishers = (publisher) => async (dispatch) => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?domains=${publisher}&apiKey=${apiKey}&pageSize=10`
  );
  dispatch(getPublishers(data.articles));
};

export default publisherArticles.reducer;
