import actionsTypes from './actionsTypes';

const initialState = {
    data: null,
    loading: false,
    error: true,
};

const reducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type){
        case actionsTypes.LIST_REQUEST:
            newState = {
                ...state,
                loading: true,
                error: false,
            }
        break;
        case actionsTypes.LIST_REQUEST_SUCCESS:
            newState = {
                ...state,
                loading: false,
                error: false,
                data: action.data,
            }
        break;
        case actionsTypes.LIST_REQUEST_FAILURE:
            newState = {
                ...state,
                data: null,
                loading: false,
                error: true,
            }
        break;
        default:
            newState = state;
    }

    return newState;
};

export default reducer;