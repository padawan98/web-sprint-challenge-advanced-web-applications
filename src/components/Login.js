import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";

const initialState = {
  username:"",
  password:""
}
const Login = () => {
  const [user, setUser] = useState(initialState);
  const {push} = useHistory();
  useEffect(()=>{
    //bubbleroute
  });

  const handleChanges = event => {
    setUser({
      ...user,
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit = event =>{
    event.preventDefault();
  }

  
  axios
    .post('http://localhost:4000/api/', user)
    .then(res =>{
      console.log(res.data.payload);
      localStorage.setItem('token', res.data.payload);
      push('/private-route');
    })
    .catch(err =>{
      console.log(err.response);
    })

  const error = "Username or Password not valid";

  return (
    <div onSubmit={handleSubmit}>
      <h1>Welcome to the Bubble App!</h1>
      <form data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <input
          name="username"
          type="text"
          placeholder="username"
          data-testid="username"
          onChange={handleChanges}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          data-testid="password"
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>
      {/* if username or password string empty error message */}
      {(user.username ==="" || user.password ==="") && 
      <p data-testid="errorMessage" className="error">{error}</p>}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.