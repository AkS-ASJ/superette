import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import filterReducer from "./reducers/filterReducer";
import userReducer from "./reducers/userReducer";
import notifReducer from "./reducers/notifReducer";

const store = configureStore({
    reducer: {
        products: productReducer,
        filter: filterReducer,
        notif: notifReducer,
        user: userReducer
    }
})

export default store