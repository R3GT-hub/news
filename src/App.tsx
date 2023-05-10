import React, { useRef } from "react";
import "./App.css";
import Home from "./home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Login(): JSX.Element {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current?.value === "saransh2002sharma@gmail.com" &&
      password.current?.value === "1234"
    ) {
      localStorage.setItem("emailData", "saransh2002sharma@gmail.com");
      localStorage.setItem("passwordData", "1234");
    }
  };

  return (
    <div>
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input className="inputform" type="text" placeholder="Enter Email id" ref={email} />
          </div>
          <div>
            <input className="inputform"
              type="password"
              placeholder="Enter password"
              ref={password}
            />
          </div>

          <button>Login</button>
        </form>
        </div>
      )}
    </div>
  );
}

export default Login;
