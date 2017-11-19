import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';
import QuizNavButton from '../QuizNavButton';

const QuizNavigation = ({
	match
}) => (
  <div className={style.quizNavigation}>
    <QuizNavButton text="Take a quiz" uri={`${match.url}/take`} />
    <QuizNavButton text="Make a quiz" uri={`${match.url}/make`} />
  </div>
);

QuizNavigation.propTypes = {
  match: propTypes.object,
}

export default QuizNavigation;
