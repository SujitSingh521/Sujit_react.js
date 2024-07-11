import {SET_THEME} from "./action";

const initialState ='light';

const themeReducer =(state =initialState,action)=>{
    switch (action.type){
        case SET_THEME:
            return action.payload;
        default:
            return state;
    }
};

export default themeReducer;
