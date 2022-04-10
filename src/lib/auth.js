import axios from "axios";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
//import Cookies from "js-cookie";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = React.useState();

  const signin = async (formData, callback) => {
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
        .post("http://localhost/tfg/back/login.php", data, headers)
        .then((data) => {
          const dataR = data.data;
          //setUsername(dataR.username);
          setToken(dataR.token);
          callback(true);
        })
        .catch((err) => {
          console.log(err);
          callback(false);
        })
    );
  };

  const signout = (callback) => {
    setToken();
    callback(true);
  };

  const value = { token, signin, signout };

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
