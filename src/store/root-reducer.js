import { combineReducers } from "redux";
import { filterReducer } from "./filters/filter-reducer";
import { positionReducer } from "./positions/position-reducer";

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer,
})
