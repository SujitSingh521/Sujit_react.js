import React, {useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = {email, password};
    console.log(userdata);
    axios.post("https://reqres.in/api/login", userdata, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      const data = response.data;
      console.log(data);
      localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          placeholder='Enter the Email...'
        /><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          placeholder='Enter the Password...'
        /><br />
        <input type="submit" value="Login" className="login-button" />
      </form>
    </div>
  );
};

export default Login;
