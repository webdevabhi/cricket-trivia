import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility/utility";

const initialState = {
    questions: [],
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTIONS_SUCCESS:
            return updateObject(state, { questions: action.questions });
    
        default:
            return state;
    }
}