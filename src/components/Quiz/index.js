import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
} from 'react-router-dom';
import style from './index.less';
import utils from './utils';
import QuizNavigation from '../QuizNavigation';
import QuizTaker from '../QuizTaker';
import QuizMaker from '../QuizMaker';
import actions from '../../actions';

const mapStateToProps = state => (
  {
    quiz: state.get('quiz'),
  }
);

const mapDispatchToProps = dispatch => (
  {
    getQuiz: (id) => dispatch(actions.getQuiz(id)),
    getQuizList: () => dispatch(actions.getQuizList()),
    submitQuiz: quiz => dispatch(actions.submitQuiz(quiz)),
  }
);

const Quiz = ({
  quiz,
  match,
  getQuiz,
  getQuizList,
  submitQuiz,
}) => {
  return (
      <div className={style.quiz}>
        <QuizNavigation match={match}/>
          <Route exact path={`${match.url}/take`} component={QuizTaker} />
          <Route exact path={`${match.url}/make`} component={QuizMaker} />
        </div>
  );
}

Quiz.propTypes = {
  quiz: propTypes.object,
  match: propTypes.object,
  getQuiz: propTypes.func,
  getQuizList: propTypes.func,
  submitQuiz: propTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
