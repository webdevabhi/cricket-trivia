import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility/utility";

const initialState = {
    questions: [],
    loading: false,
    correct: 0,
    incorrect: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTIONS_SUCCESS:
            return updateObject(state, { questions: action.questions });

        case actionTypes.EVALUATE_RESULT:
            console.log(action.result);
            return updateObject(state, { questions: action.result, correct: action.correct, incorrect: action.incorrect });
    
        default:
            return state;
    }
}