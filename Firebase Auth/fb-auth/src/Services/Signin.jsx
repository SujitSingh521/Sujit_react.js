import React from 'react';
import {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase';

const Signin =()=>{
    const [email , setemail] =useState("")
    const [password , setpassword] =useState("")

    const handlesubmit =(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password).then((res)=>{
          console.log(res)
          alert("User account successfully created!")
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div style={{textAlign:"center"}}>
        <h2 style={{color:'teal'}}>Signin</h2>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder="Enter your email" onChange={(e)=>setemail(e.target.value)}/>
            <br/><br/>
            <input type="text" placeholder="Enter the Password" onChange={(e)=>setpassword(e.target.value)}/>
            <br/><br/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signin;