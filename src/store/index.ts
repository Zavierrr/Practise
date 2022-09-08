import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers"; // 合并
import thunk, { ThunkMiddleware } from "redux-thunk";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      // 断言
      thunk as ThunkMiddleware
    )
  )
);

export type rootState = ReturnType<typeof reducers>
export default store;
