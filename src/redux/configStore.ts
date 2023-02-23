import { configureStore } from "@reduxjs/toolkit";

import modal from "./modules/ModalSlice";
import catLoctionMap from "./modules/MapSlice";


const store = configureStore({
    reducer:{modal,catLoctionMap}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;