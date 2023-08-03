import React, { useState } from "react";
import style from "./Signup.module.css";
import {NavLink, json} from "react-router-dom"

const Signup = () => {
  const [user, setUser]=useState({
    name:"",
    email:"",
    address:"",
    gist:"",
    password:""
  })
  let name, value
  const handleInputs = (e) => {
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value})
  };

  const handleSubmit= async(e)=>{
    e.preventDefault()

    try {
    const {name,email,address,gist,password} =user
    const res = await fetch("http://localhost:5000/api/v1/users/new",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,
        email,
        address,
        gist,
        password
      })
    })
    // const data= await res.json()
    // console.log(data)
    
    } catch (error) {
      console.log("Error occoured",error);
    }
  }

  return (
    <div className={style.container}>
      <h2>Register Here</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <div className={style.inputs}>
          <h5>Name</h5>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleInputs}
          />
        </div>
        
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
          <h5>Address</h5>
          <input
            type="text"
            placeholder="enter your address"
            value={user.address}
            name="address"
            onChange={handleInputs}
          />
        </div>
        <div className={style.inputs}>
          <h5>GIST Number</h5>
          <input
            type="text"
            placeholder="enter your gist no."
            value={user.gist}
            name="gist"
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
      <p>Already register?<NavLink to="/login">Login</NavLink></p>
      </form>
    </div>
  );
};

export default Signup;
