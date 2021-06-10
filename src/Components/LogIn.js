import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, handleSubmit, error } = props;
  return (
    <div className="login-container">
      <h2 className="welcome">Log In</h2>
      <form className="log-in-form" onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">{/* <small>Email</small> */}</label>
          <input
            placeholder="Email"
            className="form-control"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">{/* <small>Password</small> */}</label>
          <input
            placeholder="Password"
            className="form-control"
            name="password"
            type="password"
            required
          />
        </div>

        <button className="sign-in-btn" type="submit">
          Sign In
        </button>

        {error && error.response && <div> {error.response.data} </div>}

        <h4 className="welcome">Don't have an account?</h4>
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    },
  };
};

export const LogIn = connect(mapLogin, mapDispatch)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
