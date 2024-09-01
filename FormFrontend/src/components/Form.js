import React, { useContext } from "react";
import "./Form.css";
import FormContext from "./Context/Formcontext";
export default function Form() {
  const FormData = useContext(FormContext);
  const { createUser, data, setData } = FormData;

  function handleOnChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }
  function onSubmit(e){
    createUser(data.name, data.email, data.password, data.address, data.gender);
    e.preventDefault();
  }
  return (
    <div className="container">
      <div className="signup-card mt-3">
        <h2>Sign Up</h2>
        <form >
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="name" placeholder="Enter your username" onChange={handleOnChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" onChange={handleOnChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter your address" onChange={handleOnChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" onChange={handleOnChange}>
              <option value="" disabled selected>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" onClick={onSubmit} className="btn">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="/">Log in</a>
        </p>
      </div>
    </div>
  );
}
