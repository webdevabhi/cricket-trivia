import { combineReducers } from "redux";
import questionReducer from "./questioner";

export default combineReducers({
  quizData: questionReducer
});