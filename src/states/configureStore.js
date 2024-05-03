
import { applyMiddleware, compose, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { thunk } from './middleware'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './rootReducers'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunk,loadingBarMiddleware()]
  const middlewareEnhancer = applyMiddleware(...middlewares)


  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
