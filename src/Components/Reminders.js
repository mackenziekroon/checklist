import React from "react";
import Navbar from "./Navbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import AddNewReminder from "./AddNewReminder";
import { fetchReminder } from "../store/reminder";
import { connect } from "react-redux";

class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.loadReminders();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: !event.target.checked,
    });
  }

  render() {
    const reminders = this.props.reminder || [];
    return (
      <div>
        <Navbar />
        <div className="reminders-container">
          <h1>
            Reminders <button className="add-new-reminder">+</button>
          </h1>
          <div className="reminders-list">
            {reminders &&
              reminders.map((reminder) => (
                <div key={reminder.id}>
                  <FormControlLabel
                    control={<Checkbox checked={this.checked} />}
                    label={reminder.title}
                  />
                </div>
              ))}
          </div>

          <Link to="/reminders/completed">
            <button className="completed-btn">View Completed</button>
          </Link>
          <Link to="/landing">
            <button className="back-btn">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    reminder: state.reminder,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadReminders: () => dispatch(fetchReminder()),
  };
};

export default connect(mapState, mapDispatch)(Reminders);
