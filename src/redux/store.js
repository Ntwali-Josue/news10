import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        articles: [],
        publishers: [],
    }
})

export default store;
