import React from 'react'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import {Route, Routes} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import DeleteProduct from './components/DeleteProduct'


const AllRoutes =()=>{
  return(
    <div>
         <Routes>
            <Route path='/ProductList' element={<ProductList/>}></Route>
            <Route path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
            <Route path='/Addproduct' element={<AddProduct/>}></Route>
            <Route path='/Editproduct/:id' element={<EditProduct/>}></Route>
            <Route path='/Deleteproduct/:id' element={<DeleteProduct/>}></Route>
            

        </Routes>
    </div>
  )
}

export default AllRoutes;