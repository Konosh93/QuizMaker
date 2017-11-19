import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';


const TextInput = props => {
  const {
    type,
    name,
    value,
    placeholder,
    handleChange,
  } = props;

  return (
    <div className={style.textInput}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string,
  placeholder: propTypes.string,
  handleChange: propTypes.func.isRequired,
};

export default TextInput;
