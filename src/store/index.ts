import {compose, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {entitiesReducer} from "../entities/entitiesReducer";
import {composeWithDevTools} from "@reduxjs/toolkit/dist/devtoolsExtension";
import {appReducer} from "../App/appReducer";

// function logger(store) {
//   return function wrapDispatchToAddLogging(next) {
//     return function dispatchAndLog(action) {
//       console.log('dispatching', action)
//       let result = next(action)
//       console.log('next state', store.getState())
//       return result
//     }
//   }
// }

export const store = configureStore({
  reducer: {
    app: appReducer,
    entities: entitiesReducer,
  },
  middleware: [createSagaMiddleware()]
});
