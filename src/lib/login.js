import axios from "axios";

async function HandleLogin(data, setToken, setUsername) {
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
        //console.log(data);
        const dataR = data.data;
        setUsername(dataR.username);
        setToken(dataR.token);
        return true;
        //window.location = "/";
        //navigate("/");
        //return JSON.stringify(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  );
}
export default HandleLogin;
