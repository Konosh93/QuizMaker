import React from 'react';
import propTypes from 'prop-types';
import Choice from '../Choice';
import style from './index.less';


const Choices = ({
  choices,
  correct,
  handleChange,
  handleClick,
}) => {
  const keys = Object.keys(choices);
  const choiceElements = keys.map(k => (
    <div key={k} className={style.choice}>
      <Choice
        answer={choices[k]}
        index={k}
        correct={correct}
        handleChange={handleChange}
        handleClick={(e, answer) => { handleClick(e, answer); }}
      />
    </div>
  ));
  return (
    <div className={style.choices}>
      { choiceElements }
    </div>
  );
};

Choices.propTypes = {
  choices: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Choices;
