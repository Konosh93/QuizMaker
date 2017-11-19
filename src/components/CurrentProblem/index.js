import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';
import ProblemForm from '../ProblemForm';
import Button from '../Button';

class CurrentProblem extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.moveToNextQuestion = this.moveToNextQuestion.bind(this);
    this.state = {
      question: '',
      choices: { 0: '', 1: '', 2: '' },
      correct: '',
    };
  }

  componentWillReceiveProps(np) {
    console.log('cp');
    if (this.props.no !== np.no) {
      this.setState({
        question: '',
        choices: { 0: '', 1: '', 2: '' },
        correct: '',
      });
    }
  }

  handleChange(e) {
    e.preventDefault();
    if (!parseInt(e.target.name, 10) && parseInt(e.target.name, 10) !== 0) {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
      return;
    }
    this.setState({
      choices: { ...this.state.choices, [e.target.name]: e.target.value },
    });
  }

  handleClick(e, correct) {
    e.preventDefault();
    this.setState({ correct });
  }

  moveToNextQuestion(e) {
    e.preventDefault();
    const {
      nextQuestion,
    } = this.props;
    nextQuestion({ ...this.state, choices: Object.values(this.state.choices) });
  }

  render() {
    const {
      handleChange,
      handleClick,
      moveToNextQuestion,
    } = this;
    const {
      no,
    } = this.props;
    const {
      question,
      choices,
      correct,
    } = this.state;
    return (
      <div className={style.currentProblem}>
      Problem no {no}
        <ProblemForm
          handleChange={handleChange}
          handleClick={handleClick}
          question={question}
          choices={choices}
          correct={correct}
        />
        <div className={style.button}>
          <Button
            text="Next problem"
            handleClick={moveToNextQuestion}
          />
        </div>
      </div>
    );
  }
}

CurrentProblem.propTypes = {
  nextQuestion: propTypes.func,
  no: propTypes.number.isRequired,
};
export default CurrentProblem;
