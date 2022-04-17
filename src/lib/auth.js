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
    /*
    fetch(`${process.env.REACT_APP_BACK_URL}login.php`, {
      method: "POST",
      headers: {
        //"Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        callback(false);
      });
    */

    const headers = {
      headers: {},
    };
    return axios
      .post(
        `${process.env.REACT_APP_BACK_URL}/API/login/login.php`,
        formData,
        headers
      )
      .then((data) => {
        const dataR = data.data;
        if (dataR.status) {
          dispatch({ type: "LOGIN_TOKEN", data: dataR.data.token });
          dispatch({ type: "LOGIN_USERNAME", data: dataR.data.username });
          callback(true);
        } else {
          console.dir(dataR);
          callback(false);
        }
      })
      .catch((err) => {
        console.log(err);
        callback(false);
      })
      .finally((e) => {
        //console.log("always");
      });
  };

  const logout = (callback) => {
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
