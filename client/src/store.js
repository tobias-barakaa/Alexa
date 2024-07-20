import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";



import articleSliceReducer from "./slices/client/articleSlice";

import authSliceReducer from "./slices/client/authSlice";
import adminReducer from "./slices/admin/adminSlice";
import adminUsersReducer from "./slices/admin/adminUsersSlice";

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