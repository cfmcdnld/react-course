import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"


const store = configureStore({
    //TAKES REDUCERS (SLICES)
    reducer: {
        auth: authSlice
    }
})

export default store