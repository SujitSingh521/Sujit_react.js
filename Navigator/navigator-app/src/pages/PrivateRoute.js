import React from 'react';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <h1>You Are Not Logged In</h1>;
  }
  return children;
};

export default PrivateRoute;
