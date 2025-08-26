import React, { useEffect, useState } from 'react';
import Cards from '../Components/Cards'; 

function Products() {
  //1 Define base url

  const baseUrl = 'https://dummyjson.com/products';

  //4 Create a state for holding array data
  const [products, setProducts] = useState([]);
 //2 Define function for API Fetching

  const fetchData = async () => {
    
      const response = await fetch(baseUrl);
      const res = await response.json();
      setProducts(res.products);
    } 
 //3 create useEffect

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="container mt-4" >
      <h1 className='text-center'>Our Products</h1>
      <div className="row">
           {products.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
             <Cards Products={item} /> 
          </div>
           ))}
          </div>
     </div>
  );
}

export default Products;
