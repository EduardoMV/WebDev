import React from "react";
import { useState } from "react";

function Login(props) {
  // var [username, setUserName] = useState("");
  // var [password, setPassword] = useState("");

  var [register, setRegister] = useState({
    username: "",
    password: "",
    name: "",
    lname: "",
  });
  var [error, setError] = useState("");

  function recordUser(e) {
    // setUserName(e.target.value);
    // console.log(username);

    setRegister((prevValue) => {
      return { username: e.target.value, password: prevValue.password, name: prevValue.name, lname: prevValue.lname };
    });
  }
  function recordPassword(e) {
    // setPassword(e.target.value);
    // console.log(password);

    setRegister((prevValue) => {
      return { username: prevValue.username, password: e.target.value };
    });
  }
  function processLogin() {
    if (register.username === "admin" && register.password === "password") {
      register.name = "Eduardo";
      register.lname = "Martínez";
      props.handler(register);
    } else {
      setError("Wrong login");
    }
  }

  return (
    <form action="">
      <input type="text" placeholder="Username" onChange={recordUser} />
      <input type="password" placeholder="Password" onChange={recordPassword} />
      <button type="submit" onClick={processLogin}>
        {" "}
        Log in{" "}
      </button>
      {error}
    </form>
  );
}

export default Login;
