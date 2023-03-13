import { configureStore } from "@reduxjs/toolkit";
import publisherReducer from './publishers/publisherArticles';
import articlesReducer from './articles/articles';

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        publishers: publisherReducer,
    }
})

export default store;
