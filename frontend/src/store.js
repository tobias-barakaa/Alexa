import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authSliceReducer from "./slices/client/authSlice";
import adminReducer from "./slices/admin/adminSlice";
import adminUsersReducer from "./slices/admin/adminUsersSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        admin: adminReducer,
        users: adminUsersReducer,
        

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,

})
// re_8RPNPTMc_BLpxdoX2dqEG3p587yNC8jTp
export default store;