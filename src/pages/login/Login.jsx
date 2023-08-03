import React, { useState } from "react";
import style from "./Login.module.css";
import {NavLink} from "react-router-dom"

const Login = () => {
  const [user, setUser]=useState({
    email:"",
    password:""
  })
  let name, value
  const handleInputs = (e) => {
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value})
    console.log(user);
  };

  return (
    <div className={style.container}>
      <h2>Login Here</h2>
      <form>
      
        <div className={style.inputs}>
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleInputs}
          />
        </div>
        <div className={style.inputs}>
          <h5>password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            value={user.password}
            name="password"
            onChange={handleInputs}
          />
        </div>
        <button type="submit">Submit</button>
      <p>Create new account?<NavLink to="/signup">Signup</NavLink></p>
      </form>
    </div>
  );
};

export default Login;
