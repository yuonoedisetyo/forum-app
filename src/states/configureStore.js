import { applyMiddleware, compose, createStore } from 'redux';
import monitorReducersEnhancer from './enhancers/monitorReducers';
// import thunkMiddleware from 'redux-thunk'
import { thunk } from './middleware';
import loggerMiddleware from './middleware/logger';
import rootReducer from './rootReducers';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
