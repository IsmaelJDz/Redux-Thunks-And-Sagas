import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import thunk from "redux-thunk";
import reduxSaga from "redux-saga";

//import reducers from "../reducers/index";
import rootSaga from "../sagas";

function reducers() {
  return {
    testing: ""
  };
}

// Redux Thunk enhacer devtools
// const middlewareEnhancers = applyMiddleware(thunk);
// const composeEnhancers = compose(
//   middlewareEnhancers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const store = createStore(
//   reducers,
//   composeWithDevTools(
//     applyMiddleware(reduxSaga)
//     // other store enhancers if any
//   )
// );

const sagaMiddleware = reduxSaga();

export default () => {
  return {
    ...createStore(
      reducers,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};
