import Cookies from 'universal-cookie';
import agent from '../agent';
import {
  LOGIN,
  SIGNUP,
  REQUEST_QUIZES,
  RECEIVE_QUIZES,
  ADD_QUIZ,
  SELECT_QUIZ,
  SET_TITLE,
  INVALIDATE,
  PERMIT_EDIT,
  ADD_PROBLEM,
  REMOVE_PROBLEM,
  SET_CURRENT_PROBLEM,
  SET_QUESTION_TEXT,
  SET_QUESTION_MEDIA,
  ADD_CHOICE,
  EDIT_CHOICE_TEXT,
  EDIT_CHOICE_MEDIA,
  REMOVE_CHOICE,
  SET_CORRECT,
} from '../constants';

export const beginAuth = () => dispatch => {
  dispatch({
    type: BEGIN_AUTH,
  })
};

export const login = (email, password) => dispatch => {
  dispatch({
    type: LOGIN,
    payload: agent.accounts.login(email, password) });
};

export const signup = (name, email, password) => dispatch => {
  dispatch({
    type: SIGNUP,
    payload: agent.accounts.signup(name, email, password) });
};

export const setTokenCookie = token => {
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/', maxAge: 86400 });
};

export const requestQuizes = () => ({
  type: REQUEST_QUIZES,
});

export const receiveQuizes = (quizlist) => ({
  type: RECEIVE_QUIZES,
  payload: {
    quizlist,
  },
});

export const selectQuiz = (quiz) => ({
  type: SELECT_QUIZ,
  payload: {
    quiz,
  }
});

export const addQuiz = (quiz, title) => ({
  type: ADD_QUIZ,
  payload: {
    quiz,
    title,
  }
});

export const permitEdit = quiz => ({
  type: PERMIT_EDIT,
  payload: {
    quiz,
  }
});

export const setTitle = (quiz, title) => ({
  type: SET_TITLE,
  payload: {
    quiz,
    title,
  }
});

export const invalidate = quiz => ({
  type: INVALIDATE,
  payload: {
    quiz,
  }
});

export const addProblem = quiz => ({
  type: ADD_PROBLEM,
  payload: {
    quiz,
  }
});

export const removeProblem = (quiz, problem) => ({
  type: REMOVE_PROBLEM,
  payload: {
    quiz,
    problem,
  }
});

export const setCurrentProblem = (quiz, problem) => ({
  type: SET_CURRENT_PROBLEM,
  payload: {
    quiz,
    problem,
  }
});


export const addChoice = (quiz, problem) => ({
  type: ADD_CHOICE,
  payload: {
    quiz,
    problem,
  }
});

export const removeChoice = (quiz, problem, choice) => ({
  type: REMOVE_CHOICE,
  payload: {
    quiz,
    problem,
    choice,
  }
});


export const setCorrect = (quiz, problem, correctChoice) => ({
  type: SET_CORRECT,
  payload: {
    quiz,
    problem,
    correctChoice,
  }
});


export const setQuestionText = (quiz, problem, questionText) => ({
  type: SET_QUESTION_TEXT,
  payload: {
    quiz,
    problem,
    questionText,
  }
});


export const editChoiceText = (quiz, problem, choice, choiceText) => ({
  type: EDIT_CHOICE_TEXT,
  payload: {
    quiz,
    problem,
    choice,
    choiceText,
  }
});




/*
export const laterChange = {
  setTokenCookie,
  submitQuiz,
  getQuiz,
  getQuizList,
  login,
  signup,
  beginAuth,
};


export const action = param => ({
  type: TYPE,
  payload: {
    param,
  }
});
*/