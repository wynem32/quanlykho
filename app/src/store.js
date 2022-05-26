import { configureStore } from "@reduxjs/toolkit";
import categorySlice from './redux/categorySlice'
import productSlice from './redux/productSlice'
import staffSlice from './redux/staffSlice'
const store = configureStore({
    reducer: {
        category: categorySlice,
        product: productSlice,
        staff: staffSlice
    }
})

export default store