import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { clerChart, decrementCart, incrementCart, removeFromCart } from '../redux/slices/cartSlice';


function Cart() {
  const [totalamount,setTotalamount]=useState()
    const dispatch=useDispatch()
   const cartdata=useSelector((state)=>state.cartReducer)
    console.log(cartdata);
     const [cartProducts,setCartProducts] =useState([])
        console.log(cartProducts);
        
        useEffect(()=>{setCartProducts(cartdata.item)},[cartdata])
          useEffect(()=>{GrandTotal()},[cartdata])
        const GrandTotal=()=>{
          let total=0
          cartProducts.map((item) => (
            total+=item.totalPrice,
            setTotalamount(total)
          ))
          
        console.log(totalamount);
        
        }

  const BuyNow =()=>{
    if(confirm("Are You Sure ?")){
      alert("order placed Successfully...")
      dispatch(clerChart())
      setTotalamount(0)
    }
    else{
      alert("Check your cart")
    }
  }
       

  return (
    <div>

      {
        cartProducts.length>0 ? <div>
      <Row className='p-5'>
        <Col>
        <h3>Products Details</h3>
       <Table striped className='shadow'>
      <thead>
        <tr>
          <th> Id</th>
          <th>Title</th>
          <th>Image</th>
          <th>Quantity</th>
           <th>Price</th>
          <th>Action</th>
         					
        </tr>
      </thead>
     

     {
      cartProducts.map((item)=>( <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td><img src={item.thumbnail} width={'70px'}  alt="" /></td>
          <td>
            <div className='d-flex justify-content-evenly'>
                <button className='btn btn-secondary' onClick={()=>dispatch(decrementCart(item))}>-</button>
                <input type="text" readOnly style={{width:"30px"}} value={item.quantity}/>
                  <button className='btn btn-secondary'  onClick={()=>dispatch(incrementCart(item))} >+</button>
            </div>
          </td>
          <td>{Math.ceil(item.totalPrice)}</td>
          <td><MdDelete className='text-2xl' onClick={()=>dispatch(removeFromCart(item.id))} /></td>
          
        </tr>
       
      
      </tbody>) )
     }
      
      
      
    </Table> 
        </Col>
         <Col className='p-5'>
            <div className="card p-3 text-center shadow">
                <h3 className='text-center'>Cart Summary</h3>
                <h1>Total : ${totalamount}</h1>
                <button onClick={BuyNow}  className='btn btn-success my-5' style={{width:'140px',marginLeft:'210px'}}>Buy Now</button>

            </div>
         </Col>
      </Row>
    </div> : "no products"
      }
    </div>
  )
}

export default Cart