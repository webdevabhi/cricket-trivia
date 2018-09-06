import * as actionTypes from "./actionTypes";
import questFile from "../../questions.json";

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: actionTypes.FETCH_QUESTIONS_SUCCESS,
    questions: questions
  };
};

export const fetchQuestions = () => {
  return dispatch => {
    const questions = questFile.questions.map(que => { 
      return {"q": que.Q, "options": que.options};
    });
    dispatch(fetchQuestionsSuccess(questions));
  }
};