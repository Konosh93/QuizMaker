import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';


const RadioButton = ({
  selected,
  handleClick,
}) => {
  const innerStyle = {
    backgroundColor: selected ? 'green' : false,
  };
  return (
    <div className={style.radioButton}>
      <div className={style.outer}>
        <div className={style.inner} style={innerStyle} onClick={handleClick} />
      </div>
    </div>
  );
};

RadioButton.propTypes = {
  selected: propTypes.bool,
  handleClick: propTypes.func,
};

export default RadioButton;
