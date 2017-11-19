import React from 'react';
import propTypes from 'prop-types';
import Form from '../Form';
import TextInput from '../TextInput';
import style from './index.less';

const QuizTitleForm = props => {
  const {
    handleChange,
    title,
  } = props;
  return (
    <div className={style.quizForm}>
      <Form>
        <div className={style.input}>
          <TextInput
            type="text"
            name="title"
            value={title}
            placeholder="Enter quiz title ..."
            handleChange={handleChange}
          />
        </div>
      </Form>
    </div>
  );
};

QuizTitleForm.propTypes = {
  title: propTypes.string,
  handleChange: propTypes.func.isRequired,
};

export default QuizTitleForm;
