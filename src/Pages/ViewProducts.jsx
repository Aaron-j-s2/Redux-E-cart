import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdLocalOffer } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { Button } from 'react-bootstrap';



function ViewProducts() {

 const dispatch = useDispatch()

  //1 to get current id from the url
  const { id } = useParams();
  

    console.log(id); 


  //5 Define function for API fetching(create a state for holding viewprodut object)
  const[view,setView]=useState({})

  //2 define baseurl

  const baseUrl = `https://dummyjson.com/products/${id}`;


 
 //3 Define function for API fetching
  const viewProduct=async()=>{
    const response=await fetch(baseUrl)
    console.log(response);
    //after 4th step
    const res=await response.json()
    console.log(res);// after this create state
    setView(res) 
  }
  console.log(view);


useEffect(()=>{
    viewProduct()
  },[])


  return (
    <div className='d-flex'>
      <div className="p-4 text-center" style={{ width: '700px',height: '500px',  }}>
      
      
          
          
          <img src={view.thumbnail} alt={view.title} className='mx-auto' style={{ height: '300px' }} /> <br />
         <div className='d-flex justify-around'>
           <button  className='btn btn-success ' onClick={()=>dispatch(addToWishList(view))}  >wishList</button>
           <button  className='btn btn-success ' onClick={()=>dispatch(addToCart(view))} >Cart</button>
         </div>
          
    
      
      
    </div>
      <div className='bg-gray-200 p-5'>
        <h1 className='text-danger'>{view.title}</h1>
        <p className="mt-3">{view.description}</p>
        <h5 className='text-success'>Special Price</h5>
        <h3>₹{view.price}</h3>
      <p><MdLocalOffer /> Discount:{view.discountPercentage}%</p>
      <p>{view.shippingInformation}</p>
    <p>{view.warrantyInformation}</p>
    <h4 className='text-primary'>Available offers</h4>
    <p><MdLocalOffer />Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</p>
    <p><MdLocalOffer />Bank Offer10% off on Axis Credit Card Transactions, up to ₹750 on orders of ₹1000 and above</p>
    <Button>Buy</Button>
      </div>


    </div>
  );
}

export default ViewProducts;
