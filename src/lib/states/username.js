const usernameHandler = (state = false, action) => {
  switch (action.type) {
    //ACTION (describe what you gonna do)
    case "LOGIN_USERNAME":
      return action.data;
    case "LOGOUT_USERNAME":
      return "";
    default:
      return state;
  }
};

export default usernameHandler;
