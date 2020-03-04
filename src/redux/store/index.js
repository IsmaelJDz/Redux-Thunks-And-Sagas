import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers/index";

// function reducers() {
//   return {};
// }

const middlewareEnhancers = applyMiddleware(thunk);
const composeEnhancers = compose(
  middlewareEnhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => {
  return {
    ...createStore(reducers, composeEnhancers)
  };
};
