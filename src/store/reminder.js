import axios from "axios";

const GET_REMINDER = "GET_REMINDER";

const getReminder = (reminder) => ({
  type: GET_REMINDER,
  reminder,
});

export const fetchReminder = () => async (dispatch) => {
  try {
    console.log("before fetch");
    const { data } = await axios.get("/api/reminders");
    console.log("fetch response: ", { data });
    dispatch(getReminder(data));
  } catch (error) {
    console.log(error);
  }
};

const initalState = [];

export default function reminder(state = initalState, action) {
  switch (action.type) {
    case GET_REMINDER:
      return action.reminder;
    default:
      return state;
  }
}
