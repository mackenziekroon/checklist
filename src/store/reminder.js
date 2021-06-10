import axios from "axios";

const GET_REMINDER = "GET_REMINDER";
const GET_COMPLETED_REMINDER = "GET_COMPLETED_REMINDER";
const ADD_REMINDER = "ADD_REMINDER";
const DELETE_REMINDER = "DELETE_REMINDER";

const getReminder = (reminder) => ({
  type: GET_REMINDER,
  reminder,
});

const getCompletedReminder = (completedReminder) => ({
  type: GET_COMPLETED_REMINDER,
  completedReminder,
});

const addReminder = (newReminder) => ({
  type: ADD_REMINDER,
  newReminder,
});

const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  id,
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

export const postNewReminder = (newReminder) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/reminders", newReminder);
    dispatch(addReminder(data));
  } catch (error) {
    console.log(error);
  }
};

export const destroyReminder = (id) => async (dispatch) => {
  console.log("id in thunk->", id);
  try {
    await axios.delete(`/api/reminders/completed/${id}`);
    dispatch(deleteReminder(id));
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
    case ADD_REMINDER:
      return [...state, action.newReminder];
    case DELETE_REMINDER:
      return [...state.filter((reminder) => reminder.id !== action.id)];
    default:
      return state;
  }
}
