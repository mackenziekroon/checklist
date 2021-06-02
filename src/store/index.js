import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import user from "./user";

const reducer = combineReducers({
  user,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

//SAMPLE code if we want to use localStorage
// store.subscribe(() => {
//   if (!store.getState().user.id) {
//     localStorage.setItem('localCart', JSON.stringify(store.getState().cart))
//   }
// })

export default store;

export * from "./user";
