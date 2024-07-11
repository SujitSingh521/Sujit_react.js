import axios from 'axios'
import React,{useEffect, useState} from 'react'

const AddProduct =()=>{
  const [productData, setProductData] =useState({
    image:'',
    title:'',
    price:'',
    category:'',
    description:''
  })

  const handleChange =(e) =>{
    const {name, value}=e.target
    setProductData({...productData, [name]:value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/Product',productData)
      .then(response => {
        alert('Product Added Successfully')
        console.log(response.data)
        setProductData({
          image:'',
          title:'',
          price:'',
          category:'',
          description:''
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div style={{textAlign:"center",marginTop:"11%"}}>
      <h2>Add Product</h2>
      <br/>
      <form onSubmit={handleSubmit} style={{width:"50%", margin:"auto", border:"1px solid #ccc", padding:"20px", borderRadius:"5px", paddingRight:"62px" }}>
        <input type="text" name="image" placeholder="Enter the image URL." value={productData.image} onChange={handleChange} style={{ width:"100%", padding:"10px", marginBottom:"10px", borderRadius:"3px", border:"1px solid #ccc" }} /><br />
        <input type="text" name="title" placeholder="Enter the Product Title." value={productData.title} onChange={handleChange} style={{ width:"100%", padding:"10px", marginBottom:"10px", borderRadius:"3px", border:"1px solid #ccc" }} /><br />
        <input type="text" name="price" placeholder="Enter the Product Price." value={productData.price} onChange={handleChange} style={{ width:"100%", padding:"10px", marginBottom:"10px", borderRadius:"3px", border:"1px solid #ccc" }} /><br />
        <input type="text" name="category" placeholder="Enter the Product Category." value={productData.category} onChange={handleChange} style={{ width:"100%", padding:"10px", marginBottom:"10px", borderRadius:"3px", border:"1px solid #ccc" }} /><br />
        <input type="text" name="description" placeholder="Enter the Product Description." value={productData.description} onChange={handleChange} style={{ width:"100%", padding:"10px", marginBottom:"10px", borderRadius:"3px", border:"1px solid #ccc" }} /><br />

        <div style={{display:"flex", justifyContent:"center"}}>
          <button type="submit" style={{padding:"10px 20px",backgroundColor:"teal",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"}}>Add the Product</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
