import React from 'react';
import propTypes from 'prop-types';
import TextInput from '../TextInput';
import RadioButton from '../RadioButton';
import style from './index.less';

const Choice = ({
  answer,
  index,
  correct,
  handleClick,
  handleChange,
}) => {
  const selected = correct === answer && answer !== '';
  return (
    <div className={style.choice}>
      <div className={style.radio}>
        <RadioButton handleClick={(e) => { handleClick(e, answer); }} selected={selected} />
      </div>
      <div className={style.answer}>
        <TextInput
          type="text"
          name={index.toString()}
          value={answer}
          placeholder="Enter answer here ..."
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

Choice.propTypes = {
  answer: propTypes.string.isRequired,
  index: propTypes.string.isRequired,
  correct: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Choice;
