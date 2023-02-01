import { configureStore } from "@reduxjs/toolkit";

import modal from "./modules/ModalSlice";


const store = configureStore({
    reducer:{modal}
});

export default store;