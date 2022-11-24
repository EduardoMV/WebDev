import React from "react";
import { useState } from "react";
import axios from "axios";

function Login(props) {

  var [register, setRegister] = useState({
    username: "",
    password: "",
    name: "",
    lname: "",
  });
  var [error, setError] = useState("");

  function handleUpdate(e) {
    const { value, name } = e.target;

    setRegister((prevValue) => {
    if(name === "username") {
        return { ...prevValue, username: value};
    } else{
        return{ ...prevValue, password: value};
    }
    });
  }

  function processLogin(e) {
    e.preventDefault();
    var usrName = register.username;
    var usrPass = register.password;
    axios.post("/Login", {user: usrName, pass: usrPass}).then((res) => {
      var data = res.data;
      if(!data.hasOwnProperty("error")){
        register.name = data.name;
        register.lname = data.lname;
        props.handler(register);
      } else {
        setError(data.message);
      }
    }).catch((err => {
      console.error(err.error);
    }));
    // axios.get("/login/" + usrName + "/" + usrPass).then((res) => {
    //   var data = res.data;
    //   if(!data.hasOwnProperty("error")){
    //     register.name = data.name;
    //     register.lname = data.lname;
    //     props.handler(register);
    //   } else {
    //     setError(data.message);
    //   }
    // }).catch((err => {
    //   console.error(err.error);
  }

  return (
    <form action="">
      <input name = "username" type="text" placeholder="Username" onChange={handleUpdate} />
      <input name = "password" type="password" placeholder="Password" onChange={handleUpdate} />
      <button type="submit" onClick={processLogin}>
        {" "}
        Log in{" "}
      </button>
      {error}
    </form>
  );
}

export default Login;
