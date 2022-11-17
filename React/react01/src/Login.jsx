import React from "react";
import { useState } from "react";

function Login (props) {
    var [username, setUserName] = useState("");
    var [password, setPassword] = useState("");
    var [error, setError] = useState("");

    function recordUser(e){
        setUserName(e.target.value);
        // console.log(username);
    }
    function recordPassword(e){
        setPassword(e.target.value);
        // console.log(password);
    }
    function processLogin() {
        if(username === "admin" && password === "password"){
            props.handler();
        } else {
            setError("Wrong login");
        }
    }

    return(
        <form action="">
            <input type="text" placeholder="Username" onChange={recordUser}/>
            <input type="password" placeholder="Password" onChange={recordPassword}/>
            <button type="submit" onClick={processLogin}> Log in </button>
            {error}
        </form>
    )
}

export default Login