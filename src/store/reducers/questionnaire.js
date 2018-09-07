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
            return updateObject(state, { questions: action.questions, correct: 0, incorrect: 0 });

        case actionTypes.EVALUATE_RESULT:
            return updateObject(state, { questions: action.result, correct: action.correct, incorrect: action.incorrect });
    
        default:
            return state;
    }
}