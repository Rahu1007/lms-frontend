import { configureStore } from "@reduxjs/toolkit";

import { devtools } from "globals";
import { reduce } from "../../../eslint.config.cjs";

const store = configureStore({
        reducer:{},
        devtools:true

});

export default store;