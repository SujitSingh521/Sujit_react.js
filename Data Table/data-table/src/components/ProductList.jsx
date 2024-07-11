import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          _page:page,
          _limit:10,
          _sort:sort ? "price" :undefined,
          _order:sort,
          category:filter,
          q:search.trim() !== "" ? search :undefined
        };

        const response = await axios.get("http://localhost:8000/Product", {params});
        setProducts(response.data);
      } catch(error){
        alert("Error fetching products:" + error.message);
      }
    };

    fetchData();
  },[filter,sort,page,search]);

  const handleSearchChange =(e)=>{
    setSearch(e.target.value);
  };

  const resetAll =()=>{
    setPage(1);
    setSort("");
    setFilter(null);
    setSearch("");
    alert("All Data are reset..");
  };

  const handlePreviousPage =()=> {
    if (page>1) {
      setPage(page - 1);
    }
  };

  const handleNextPage =()=>{
    setPage(page + 1);
  };

  return (
    <div>
      <h2 style={{ padding:"10px", textAlign:"center",marginTop:"11%",color:"black"}}>Product List Page</h2>
      <div className="Container" style={{marginBottom:"20px", textAlign:"center"}}>
        <div>
        <button onClick={()=>setSort("desc")} style={{margin:"5px"}}>High To Low Price</button>

          <button onClick={()=>setSort("asc")} style={{margin:"5px"}}>Low To High Price</button>
        </div>

        <input
          type="text"
          placeholder="Search by category or title..."
          onChange={handleSearchChange}
          value={search}
          style={{margin:"10px", padding:"5px"}}
        />

        <select onChange={(e)=>setFilter(e.target.value)} value={filter} style={{margin:"10px", padding:"5px"}}>
          <option value="">Select Your choice.</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="watches for men">watches for men</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>

        <button onClick={resetAll} style={{margin:"10px", padding:"7px 20px"}}>Reset</button>
      </div>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(4,1fr)",
          gap:"15px",
          border:"1px solid ",
          padding:"20px",
        }}
      >
        {products.map((el) => (
          <div
            key={el.id}
            style={{
              minWidth:"100%",
              border:"1px solid black",
              height:"500px",
              padding:"10px",
            }}
          >
            <p>Id:{el.id}</p>
            <img src={el.image} alt={el.title} height={200} width={200} />
            <p>{el.category}</p>
            <h3>{el.price}</h3>
            <p>{el.description}</p>
            <br />
            <br />
            <Link
              to={`/ProductDetails/${el.id}`}
              style={{
                backgroundColor:"#43acac",
                color:"black",
                textDecoration:"none",
                padding:"15px 30px",
                border:"1px solid black",
              }}
            >
              Buy Now
            </Link>
            <br/>
            <br/>
          </div>
        ))}
      </div>

      <br />
      <div style={{textAlign:"center"}}>
        <button onClick={handlePreviousPage} disabled={page === 1} style={{padding:"10px 20px", backgroundColor:"blue", color:"white", border:"none", borderRadius:"5px", cursor:"pointer"}}>
          Previous
        </button>
        <b style={{margin:"0 10px" }}>{page}</b>
        <button onClick={handleNextPage} style={{padding:"10px 27px", backgroundColor:"#26a4a4", color:"white", border:"none", borderRadius:"5px", cursor:"pointer"}}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
