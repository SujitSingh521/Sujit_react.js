import {ADD,REDUCE} from "./action";

const initialState =10;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return state + action.payload;
        case REDUCE:
            return state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;
