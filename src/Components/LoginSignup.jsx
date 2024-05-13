import React, { useState } from "react";
import "./LoginSignup.css";
import usericon from "../assets/user.png";
import passwordicon from "../assets/locked.png";
import emailicon from "../assets/email.png";
import validation from "../validation";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(validation(values));
  }

  return (
    <div className="container">
      <form onSubmit={handleValidation}>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? (<div></div> ) : ( <div className="input">
              <img src={usericon} alt="" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleInput}/></div>)}

              {action === "Login" ? (<div></div> ) : (<p>{errors.name}</p> )}
        
         <div className="input">
            <img src={emailicon} alt="" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
            />
          </div>
          <p>{errors.email}</p>

          <div className="input">
            <img src={passwordicon} alt="" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </div>
          <p>{errors.password}</p>
          {action === "Sign up" ? (
            <div></div>
          ) : (
            <div className="forgotpassword">Lost Password? <span>Click here</span> </div>
          )}
          <div className="submit-container">
            
              <button className={action === "Login" ? "submit gray" : "submit"}onClick={() => {setAction("Sign up");}}>Sign up</button>
            
            
              <button className={action === "Sign up" ? "submit gray" : "submit"}onClick={() => {setAction("Login");}}>Login</button>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
