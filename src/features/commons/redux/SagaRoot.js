// Implementation from https://github.com/redux-saga/redux-saga/issues/178 - jamiesunderland commented on 18 Jan
import {fork, all} from 'redux-saga/effects';
import watchList from '../../home/services/service';

const sagas = [
    watchList,
];
  
function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
};

export default rootSaga;
