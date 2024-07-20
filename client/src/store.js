import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authSliceReducer from './slices/authSlice';
import articleSliceReducer from "./slices/articleSlice";
import adminReducer from './slices/adminSlice';
import adminUsersReducer from "./slices/adminUsersSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        article: articleSliceReducer,
        auth: authSliceReducer,
        admin: adminReducer,
        users: adminUsersReducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,

})

export default store;