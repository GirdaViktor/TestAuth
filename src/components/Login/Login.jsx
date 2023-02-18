import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import LoginReduxForm from "../LoginForm/LoginForm";
import classes from './login.module.scss';
import {useNavigate} from "react-router";

const Login = (props) => {
  const navigate = useNavigate();
  const redirectSuccess = () => {
    navigate('/success');
  };

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return redirectSuccess()
  }

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login} )(Login);


