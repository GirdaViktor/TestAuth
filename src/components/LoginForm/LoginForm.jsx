import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, maxLength, minLength, required} from "../../api/validators";

import { Form, Input, Checkbox, Button } from "antd";

const FormItem = Form.Item;
const maxLength25 = maxLength(25);
const minLength3 = minLength(3);

const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};

const AInput = makeField(Input);
const ACheckbox = makeField(Checkbox);

const LoginForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        label="Email"
        name="email"
        component={AInput}
        type="email"
        placeholder="Email"
        validate={[required, maxLength25, minLength3, email]}
      />

      <Field
        label="Password"
        name="password"
        component={AInput}
        type="password"
        placeholder="Password"
        validate={[required]}
      />

      <Field
        label="Remember me"
        name="rememberMe"
        id="employed"
        component={ACheckbox}
        type="checkbox"
      />

      <Button
        type="primary"
        disabled={pristine || submitting}
        htmlType="submit"
      >
        Sign in
      </Button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginReduxForm;
