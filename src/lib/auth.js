import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCookie, getCookie } from "./functions";
//import Cookies from "js-cookie";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const tokenRedux = useSelector((state) => state.token);
  const tokenCookie = getCookie("LOGIN_TOKEN", true);
  const [token, setToken] = useState(tokenRedux);
  const dispatch = useDispatch();
  const headers = {
    headers: {},
  };

  const checkTokenValid = useCallback(() => {
    let formData = new FormData();
    formData.append("token", tokenCookie);
    axios
      .post(
        `${process.env.REACT_APP_BACK_URL}/API/login/checkToken.php`,
        formData,
        { headers: {} }
      )
      .then((data) => {
        const dataR = data.data;
        if (dataR.status) {
          if (tokenCookie && dataR.status) {
            setToken(tokenCookie);
            dispatch({ type: "LOGIN_TOKEN", data: tokenCookie });
            dispatch({ type: "LOGIN_USERNAME", data: dataR.data.username });
          }
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, [tokenCookie, dispatch]);

  useEffect(() => {
    checkTokenValid(tokenCookie);
  }, [tokenCookie, setToken, checkTokenValid]);

  const login = async (formData, callback) => {
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
          setCookie("LOGIN_TOKEN", dataR.data.token, 1, true);
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
    setToken("");
    dispatch({ type: "LOGOUT_TOKEN" });
    dispatch({ type: "LOGOUT_USERNAME" });
    setCookie("LOGIN_TOKEN", "", -2, true);
    callback(true);
  };

  const value = { token, login, logout, checkTokenValid };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  const tokenCookie = getCookie("LOGIN_TOKEN", true);

  if (!auth.token && !tokenCookie) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/iniciar-sesion" state={{ from: location }} replace />;
  }

  return children;
}
