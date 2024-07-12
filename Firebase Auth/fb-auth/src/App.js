import React from 'react';
import Login from './Services/Login';
import Signin from './Services/Signin';

const App =()=>{
  return (
    <div>

      <h1 style={{color:"darkcyan",paddingLeft:"22px"}}>Sign-Up and Log-In Forms Auth:</h1>
          <Signin />

       <br/>
       <br/>
          <hr/>
          <Login />
    </div>
  );
}

export default App;
