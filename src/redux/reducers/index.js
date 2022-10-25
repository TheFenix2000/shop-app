import { combineReducers } from "@reduxjs/toolkit";

import handleCart from "./handleCart";

const products = combineReducers({handleCart})

export default products