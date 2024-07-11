import React from 'react'
import {Link} from 'react-router-dom'

const Navbar =()=>{
  return (
    <div>
      <Link to={"/login"}  style={{color:"white",background:"#60b431",textDecoration:"underline",padding:"7px 25px"}}>Login</Link>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/dashboard"} style={{color:"white",background:"#e77827",textDecoration:"underline",padding:"7px 25px"}}>Dashboard</Link>
    </div>
  )
}

export default Navbar;