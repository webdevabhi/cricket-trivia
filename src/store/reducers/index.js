import { combineReducers } from "redux";
import questionReducer from "./questionnaire";

export default combineReducers({
  quizData: questionReducer
});