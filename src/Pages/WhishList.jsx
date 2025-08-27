import React, {  useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeartCircleXmark } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList } from '../redux/slices/wishlistSlice';

function WhishList() {

  const dispatch=useDispatch()
    const wishlistdata=useSelector((state)=>state.wishlistReducer)
    console.log(wishlistdata);
    const [WishListProducts,setWishListProducts] =useState([])
    console.log(WishListProducts);
    
    useEffect(()=>{setWishListProducts(wishlistdata.item)},[wishlistdata])
    console.log(WishListProducts);
    
  return (
    <div>
      {WishListProducts.length>0 ? <div>
  <div class="text-center h3 m-3 fw-semibold">Wishlist Products</div>

  <div className="d-flex ">
    {
      WishListProducts.map((item)=>(<Card
      style={{ width: "18rem" }}
      className="m-5 rounded-2xl shadow-2xl border-0 hover:bg-slate-400"
    >
      <Card.Img
        variant="top"
        src={item.thumbnail}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Price:{item.price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary">
            <FaHeartCircleXmark onClick={()=>dispatch(removeFromList(item.id))} />
          </Button>
          <Button variant="primary">
            <FaShoppingCart />
          </Button>
        </div>
      </Card.Body>
    </Card>
))
    }
  </div>
</div>

      :
      <div>


        <div className='d-flex justify-content-center align-items-center mt-20'>
       
        <img className='' src="https://i.pinimg.com/originals/68/d8/7c/68d87c8acc715b3d16e1b817566b41ea.gif" alt="" width={500} />
        
      </div> 
      <div>
         <h1 className='text-3xl font-bold text-center m-5'>Your Wishlist is Empty</h1>
         <Button className='mx-auto d-block m-4'>Shop now</Button>
      </div>


      </div>
      
      }
    </div>
  )
}

export default WhishList
