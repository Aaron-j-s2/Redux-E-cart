import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
function Cart() {
  return (
    <div>
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td><img src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"width={'70px'}  alt="" /></td>
          <td>
            <div className='d-flex justify-content-evenly'>
                <button className='btn btn-secondary'>-</button>
                <input type="text" readOnly style={{width:"30px"}} value={'20'}/>
                  <button className='btn btn-secondary'>+</button>
            </div>
          </td>
           <td>Mark</td>
          <td>Otto</td>
          
        </tr>
       
      
      </tbody>
    </Table> 
        </Col>
         <Col className='p-5'>
            <div className="card p-3 text-center shadow">
                <h3 className='text-center'>Cart Summary</h3>
                <h1>Total : $768</h1>
                <button  className='btn btn-success my-5' style={{width:'140px',marginLeft:'210px'}}>Buy Now</button>

            </div>
         </Col>
      </Row>
    </div>
  )
}

export default Cart