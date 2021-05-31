import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
// import { Login, Signup } from "./Components";
// import { me } from "./store";
import Welcome from "./Components/Welcome";
import LandingScreen from "./Components/LandingScreen";
import Reminders from "./Components/Reminders";
import CompletedReminders from "./Components/CompletedReminders";
//component

/**
 * COMPONENT
 */
export default class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/landing" component={LandingScreen} />
        <Route exact path="/reminders" component={Reminders} />
        <Route
          exact
          path="/reminders/completed"
          component={CompletedReminders}
        />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> */}

        {
          isLoggedIn &&
            // <Switch>
            {
              /* Routes placed here are only available after logging in */
            }
          // </Switch>
        }
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes));
// export default withRouter(Routes);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
