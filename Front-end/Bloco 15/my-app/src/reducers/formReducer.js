const INITIAL_STATE = {
  state: {
    registered: false,
    profile: {
      name: '',
      email: '',
      area: '',
    }
  },
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FORM_SAVED':
      return { state: action.state };
    default:
      return state;
  }
}

export default formReducer;