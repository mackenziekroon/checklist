import axios from "axios";

const GET_REMINDER = "GET_REMINDER";
const GET_COMPLETED_REMINDER = "GET_COMPLETED_REMINDER";

const getReminder = (reminder) => ({
  type: GET_REMINDER,
  reminder,
});

const getCompletedReminder = (completedReminder) => ({
  type: GET_COMPLETED_REMINDER,
  completedReminder,
});

export const fetchReminder = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/reminders");
    dispatch(getReminder(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCompletedReminder = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/reminders/completed");
    dispatch(getCompletedReminder(data));
  } catch (error) {
    console.log(error);
  }
};

const initalState = [];

export default function reminder(state = initalState, action) {
  switch (action.type) {
    case GET_REMINDER:
      return action.reminder;
    case GET_COMPLETED_REMINDER:
      return action.completedReminder;
    default:
      return state;
  }
}
