import { createStore } from "redux";
import { uiReducer } from "./reducers/uiReducer";

export const store = createStore(uiReducer);
