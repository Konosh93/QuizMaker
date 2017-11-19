import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import style from './index.less';
import utils from './utils';
import QuizTitleForm from '../QuizTitleForm';
import CurrentProblem from '../CurrentProblem';
import Button from '../Button';
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

class Quiz extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      problems: [],
    };
  }

  componentWillReceiveProps() {

  }

  handleClick(e, correct) {
    utils.handleClick(e, this, correct);
  }

  handleSubmit(e) {
    utils.handleSubmit(e, this);
  }

  handleChange(e) {
    utils.handleChange(e, this);
  }

  nextQuestion(p) {
    utils.nextQuestion(null, this, p);
  }

  render() {
    const {
      handleChange,
      nextQuestion,
    } = this;
    const {
      title,
    } = this.state;
    return (
      <div className={style.quiz}>
        <div className={style.title}>
          <QuizTitleForm
            handleChange={handleChange}
            title={title}
          />
        </div>
        <div className={style.problem}>
          <CurrentProblem nextQuestion={nextQuestion} no={this.state.problems.length + 1} />
        </div>
        <div className={style.button}>
          <Button text="Submit quiz" handleClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

Quiz.propTypes = {
  quiz: propTypes.object,
  fetchQuizes: propTypes.func,
  submitQuiz: propTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
