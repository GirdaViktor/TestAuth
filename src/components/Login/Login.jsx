import React from 'react';
import LoginReduxForm from "../LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import styles from './login.module.scss';


const Login = (props) => {
  const onSubmitForm = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };

  return (
    <div className={styles.login}>
      <h1>Авторизация</h1>
      <LoginReduxForm onSubmit={onSubmitForm}/>
    </div>
  );
};

export default connect(null, {login})(Login);
