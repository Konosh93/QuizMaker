import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';

const Form = props => {
  const {
  children,
  } = props;
  return (
    <div className={style.form}>
      <form>
        {children}
      </form>
    </div>
  );
};

Form.propTypes = {
  children: propTypes.node.isRequired,
};

export default Form;
