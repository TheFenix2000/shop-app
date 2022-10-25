import { configureStore } from "@reduxjs/toolkit";

import products from "./reducers";

const store = configureStore({
    reducer: products
})

export default store