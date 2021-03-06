const preventDefault = e => {
  if (e) {
    e.preventDefault();
  }
}

const validateEmail = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true;
  }
    alert("You have entered an invalid email address!")
    return false;
}

const handleClick = (e, c, correct) => {
  preventDefault(e);
  const {
    isFetching,
    isSignup,
    name,
    email,
    password,
  } = c.state;
  const isInvalidName = (name === '') && isSignup;
  const isInvalidEmail = !validateEmail(email);
  const isInvalidPassword = password === '';

  if (isFetching || isInvalidName || isInvalidEmail  || isInvalidPassword) {
    console.log(isFetching, isInvalidName, isInvalidEmail, isInvalidPassword)
    return;
  };
  c.setState({ isFetching: true });
  const { login, signup, beginAuth } = c.props;
  if (isSignup) {
    beginAuth();
    signup({ name, email, password });
  } else {
    beginAuth();
    login({ email, password });
  }
};

const toggleAction = (e, c) => {
  preventDefault(e);
  c.setState({ isSignup: !c.state.isSignup });
};


const handleChange = (e, c) => {
  preventDefault();
  c.setState({
    [e.target.name]: e.target.value,
  });
};


export default {
  handleClick,
  handleChange,
  toggleAction,
};
