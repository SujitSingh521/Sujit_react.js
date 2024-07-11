import {signInWithPopup, signOut} from "firebase/auth";
import React from "react";
import {auth, provider} from "../Services/firebase";
import GoogleButton from "react-google-button";
import {useAuthState} from "react-firebase-hooks/auth";

const Login =()=>{
  const [user] =useAuthState(auth);
  const handleclick =()=>{
    signInWithPopup(auth, provider)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      });
  };
  const handleLogOut =()=>{
    signOut(auth)
      .then((res)=>{
        alert("logOut");
      })
      .catch((err)=>{
        console.log(err);
      });
  };
  return (
    <div>
      <br></br>

      <GoogleButton onClick={handleclick}>LoginwithGoogle</GoogleButton>
      <br/>
      <button
        onClick={handleLogOut}
        style={{
          width:"88px",
          height:"39px",
          background:"red",
          color:"white",
          border:"1px solid black",
        }}
      >
        Logout
      </button>

    </div>
  );
};

export default Login;
