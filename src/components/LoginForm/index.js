import React from 'react';
import propTypes from 'prop-types';
import Form from '../Form';
import TextInput from '../TextInput';
import Button from '../Button';
import style from './index.less';


const LoginForm = props => {
  const {
    data,
    handleChange,
    handleClick,
    toggleAction,
  } = props;
  const label = data.isSignup ? 'Sign up with your email' : 'Login with your email';
  const buttonText = data.isSignup ? 'SIGNUP' : 'LOGIN';
  const toggleText = data.isSignup ? 'Already a member? login' : 'Not registered yet? signup';
  const nameField = data.isSignup ? (
    <div className={style.text}>
      <TextInput
        type="text"
        name="name"
        value={data.name}
        placeholder="Enter your name ..."
        handleChange={handleChange}
      />
    </div>
  ) : null;

  return (
    <div className={style.loginForm}>
      <div className={style.form}>
        <div className={style.formLabel}>
          <span>{label}</span>
        </div>
        <Form>
          {nameField}
          <div className={style.text}>
            <TextInput
              type="email"
              name="email"
              value={data.email}
              placeholder="Enter your email ..."
              handleChange={handleChange}
            />
          </div>
          <div className={style.text}>
            <TextInput
              type="password"
              name="password"
              value={data.password}
              placeholder="Enter your password ..."
              handleChange={handleChange}
            />
          </div>
          <div className={style.button}>
            <Button
              handleClick={handleClick}
              text={buttonText}
            />
          </div>
          <hr />
          <div className={style.button}>
            <Button
              handleClick={handleClick}
              text="Login with Facebook"
            />
          </div>
          <div className={style.toggleText}>
            <span onClick={toggleAction}>{toggleText}</span>
          </div>
        </Form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  data: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    isFetching: propTypes.bool.isRequired,
    isSignup: propTypes.bool.isRequired,
  }),
  handleChange: propTypes.func.isRequired,
  handleClick: propTypes.func.isRequired,
  toggleAction: propTypes.func.isRequired,
};

export default LoginForm;
