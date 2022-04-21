const tokenHandler = (state = false, action) => {
  //console.dir(action);
  switch (action.type) {
    //ACTION (describe what you gonna do)
    case "LOGIN_TOKEN":
      return action.data;
    case "LOGOUT_TOKEN":
      return "";
    default:
      return state;
  }
};

export default tokenHandler;
