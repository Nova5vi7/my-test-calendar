import { createStore } from "redux";
import initialState from "./initial-state";
import reduser from "./reduser";

const store = createStore(reduser, initialState);

export default store;
