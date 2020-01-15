import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer  from '../../features/commons/redux/ReducerRoot';

import Sagas from '../../features/commons/redux/SagaRoot';

const sagaMiddleware = createSagaMiddleWare();

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(Sagas);
  return store;
}

export default configureStore;

