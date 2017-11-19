import React from 'react';
import propTypes from 'prop-types';
import Form from '../Form';
import Question from '../Question';
import Choices from '../Choices';
import style from './index.less';

const ProblemForm = ({
  handleChange,
  handleClick,
  question,
  choices,
  correct,
}) => (
  <div className={style.problemForm}>
    <Form>
      <div className={style.question}>
        <Question
          question={question}
          handleChange={handleChange}
        />
      </div>
      <div className={style.choices}>
        <Choices
          choices={choices}
          correct={correct}
          handleChange={handleChange}
          handleClick={(e, answer) => { handleClick(e, answer); }}
        />
      </div>
    </Form>
  </div>
);


ProblemForm.propTypes = {
  question: propTypes.string,
  choices: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default ProblemForm;
