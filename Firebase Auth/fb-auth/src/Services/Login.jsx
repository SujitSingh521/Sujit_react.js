import {signInWithEmailAndPassword, signOut} from 'firebase/auth'
import React,{useState} from 'react'
import {auth} from './firebase'

const Login =()=>{
    const [email , setemail] =useState("")
    const [password , setpassword] =useState("")

    const handlesubmit =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    const handlelogout =()=>{
      signOut(auth).then((res)=>alert('Logout sucessfully!..',res))
      .catch((err)=>console.log(err))
    
    }

  return(
    <div style={{textAlign:"center"}}>
        <h2 style={{color:"green"}}>Login</h2>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder="Enter your email" onChange={(e)=>setemail(e.target.value)}/>
            <br/><br/>
            <input type="text" placeholder="Enter the Password" onChange={(e)=>setpassword(e.target.value)}/>
            <br/><br/>
            <input type="submit" />
            <br/>  <br/>
            <button onClick={handlelogout} style={{color:"white",backgroundColor:"red",width:"80px",height:"30px",border:"1px solid black"}}>Logout</button>
        </form>
    </div>
  )
}

export default Login;