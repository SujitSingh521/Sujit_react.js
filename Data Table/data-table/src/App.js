import React from 'react'
import AllRoutes from './AllRoutes'
import {Link, useParams} from 'react-router-dom'
import './App.css'

const App =()=>{

  return (
    <div>
      <div className='navbar'> 
        <Link to={'/ProductList'} style={{textDecoration:"none",color:"white"}}>ProductList</Link>
        <Link to={'/ProductDetails'} style={{textDecoration:"none",color:"white"}}>ProductDetails</Link>
        <Link to={'/Addproduct'} style={{textDecoration:"none",color:"white"}}>Addproduct</Link>
        <Link to={`/Editproduct`} style={{textDecoration:"none",color:"white"}}>Editproduct</Link>
        <Link to={`/Deleteproduct`} style={{textDecoration:"none",color:"white"}}>Deleteproduct</Link>
      </div>

      <AllRoutes/>
      
    </div>
  )
}

export default App;