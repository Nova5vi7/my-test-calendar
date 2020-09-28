const reduser = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        modalIsOpen: true,
        date: action.payload,
      };
    case "CLOSE":
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
};

export default reduser;
