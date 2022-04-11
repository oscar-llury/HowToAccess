import usernameHandler from "./states/username";
import tokenHandler from "./states/token";

import { combineReducers } from "redux";

//REDUCER (handle all logic of waht happen to the state when Dispatch is fired)
const allStates = combineReducers({
  username: usernameHandler,
  token: tokenHandler,
});

export default allStates;

//DISPATCH (send action to reducer)
//import { useDispatch } from "react-redux";
//const dispatch = useDispatch();
//dispatch({ type: "LOGIN_OS" });
//store.subscribe(() => console.log(store.getState()));
//store.dispatch(increment()
