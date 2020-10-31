import { createStore, applyMiddleware } from 'redux';
import createSagaMiddle from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();

const middleware = [logger, sagaMiddleware, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;