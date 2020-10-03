import { createStore } from "redux";
import countReducer from "./reducers/reactos/window.reducer";

let store = createStore(countReducer);

export default store;
