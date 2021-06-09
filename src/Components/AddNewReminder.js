import React from "react";
import { Link } from "react-router-dom";
import { postNewReminder } from "../store/reminder";
import { connect } from "react-redux";

class AddNewReminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postReminder({ ...this.state });
    this.setState({
      title: "",
    });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="show-new-reminder-container">
        <input
          className="reminder-input"
          type="text"
          onChange={this.handleChange}
          value={title}
          name="title"
        />

        <Link to="/reminders">
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="create-reminder-btn"
          >
            Create
          </button>
        </Link>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    newReminder: state.reminder,
  };
};

const mapDispatch = (dispatch) => {
  return {
    postReminder: (reminder) => dispatch(postNewReminder(reminder)),
  };
};

export default connect(mapState, mapDispatch)(AddNewReminder);
