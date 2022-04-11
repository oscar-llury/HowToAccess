import axios from "axios";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import Cookies from "js-cookie";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const login = async (formData, callback) => {
    console.log("login");

    let username = formData.get("username");
    let password = formData.get("password");
    let data = {
      user: username,
      passw: password,
    };
    /*const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
  };*/
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    return (
      axios
        //.headers({ "Access-Control-Allow-Origin": "*" })
        .post(`${process.env.REACT_APP_BACK_URL}login.php`, data, headers)
        .then((data) => {
          const dataR = data.data;
          dispatch({ type: "LOGIN_TOKEN", data: dataR.token });
          dispatch({ type: "LOGIN_USERNAME", data: dataR.username });
          callback(true);
        })
        .catch((err) => {
          console.log(err);
          callback(false);
        })
    );
  };

  const logout = (user, callback) => {
    console.log("logout");
    dispatch({ type: "LOGOUT_TOKEN" });
    dispatch({ type: "LOGOUT_USERNAME" });
    callback(true);
  };

  const value = { token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/iniciar-sesion" state={{ from: location }} replace />;
  }

  return children;
}
