import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { actionsTypes } from '../redux';
import servicesConstants from './servicesConstants';
import movies from '../../../settings/feed/sample.json';

const  { LIST_SERVICE_PATH } = servicesConstants;

const query = async () => {
    const url = LIST_SERVICE_PATH;
    return movies;
    //return axios.get(`${url}`);
};

function* getList() {
    try{
        const data = yield call(query);
        // console.log("SUCCESS data : ", data);
        yield put({
            type: actionsTypes.LIST_REQUEST_SUCCESS,
            data,
        })
    } catch (error) {
        // console.log("ERROR data : ", error);
        yield put({
            type: actionsTypes.LIST_REQUEST_ERROR,
            error
        })
    }
}

function* watchList(){
    yield takeEvery(actionsTypes.LIST_REQUEST, getList);
}

export default watchList;