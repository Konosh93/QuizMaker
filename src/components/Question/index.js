import React from 'react';
import propTypes from 'prop-types';
import TextInput from '../TextInput';
import style from './index.less';

const Question = ({
  question,
  handleChange,
}) => (
  <div className={style.question}>
    <TextInput
      type="text"
      name="question"
      value={question}
      placeholder="Enter your question here ..."
      handleChange={handleChange}
    />
  </div>
);

Question.propTypes = {
  question: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default Question;
