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
      return {"Q": que.Q, "options": que.options};
    });
    dispatch(fetchQuestionsSuccess(questions));
  }
};

export const evaluateResult = (ansData) => {
  const result = Object.keys(ansData).map((key) => {
    if(ansData[key].Q === questFile.questions[key].Q){
      let tmpResults = {
        ...questFile.questions[key],
        ansSelected: ansData[key].ansSelected
      };
      if(ansData[key].ansSelected === questFile.questions[key].A) {
        tmpResults.incorrect = false;
      } else {
        tmpResults.incorrect = true;
      }
      return tmpResults;
    }
  });

  return {
    type: actionTypes.EVALUATE_RESULT,
    result: result
  }
}

export const submitForm = (data) => {
  return dispatch => {
    dispatch(evaluateResult(data))
  }
}