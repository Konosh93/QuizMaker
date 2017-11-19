import Cookies from 'universal-cookie';
import agent from '../agent';

const fetchGeneralQuizes = () => ({
  type: 'FETCH_QUIZES',
  payload: agent.quizes.fetch(),
});

const setTokenCookie = token => {
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/', maxAge: 86400 });
};

const submitQuiz = quiz => (getState, dispatch) => {
  dispatch({
    type: 'SUBMIT_QUIZ',
    payload: agent.quizes.submit(quiz),
  });
};

const fetchQuizes = user => (getState, dispatch) => {
  if (!user) {
    dispatch(fetchGeneralQuizes());
  }
};

export default {
  setTokenCookie,
  fetchQuizes,
  submitQuiz,
};
