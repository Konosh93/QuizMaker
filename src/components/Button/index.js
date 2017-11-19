import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';


const Button = props => {
  const {
    handleClick,
    text,
  } = props;

  return (
    <div className={style.btn}>
      <button onClick={handleClick}>
        { text }
      </button>
    </div>
  );
};

Button.propTypes = {
  handleClick: propTypes.func.isRequired,
  text: propTypes.string,
};

export default Button;
