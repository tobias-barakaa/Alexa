import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import articleSliceReducer from "./slices/client/articleSlice";
import authSliceReducer from "./slices/client/authSlice";
import adminReducer from "./slices/admin/adminSlice";
import adminUsersReducer from "./slices/admin/adminUsersSlice";
import blogsSliceReducer from "./slices/client/blogSlice";
import blogsSliceApiReducer from "./slices/admin/blogSlice";
import articlecreationSliceReducer from "./slices/client/articleCreationSlice";
import resumeCVWritingReducer from './slices/client/resumeCVWritingSlice';
import emailCopywritingSliceReducer from './slices/client/emailCopywritingSlice';


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        article: articleSliceReducer,
        auth: authSliceReducer,
        admin: adminReducer,
        users: adminUsersReducer,
        blog: blogsSliceReducer,
        blogs: blogsSliceApiReducer,
        articlecreation: articlecreationSliceReducer, 
        resumeCVWriting: resumeCVWritingReducer,
        emailCopywriting: emailCopywritingSliceReducer,
        

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,

})

export default store;