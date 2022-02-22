import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer } from '../../reducers'
import { loadState, saveState } from '../localStorage';

const initialState = loadState()
const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
store.subscribe(() => saveState(store.getState()))