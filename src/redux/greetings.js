const UPDATE_GREETING = 'UPDATE_GREETING';

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('/api/greetings');
    const greeting = await response.json();
    if (response.ok) {
      console.log(response);
      dispatch({ type: UPDATE_GREETING, payload: greeting });
    }
  } catch (error) {
    dispatch({ type: UPDATE_GREETING, payload: { text: 'Error: The back-end should be running in port 3001' } });
  }
};

export const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GREETING:
      return action.payload;
    default:
      return state;
  }
};
