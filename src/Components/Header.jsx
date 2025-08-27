import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <img src="https://cdn-icons-png.flaticon.com/512/7058/7058475.png" width={60} alt="" />
          <Navbar.Brand href="/">Aaron Shopping</Navbar.Brand>
       <div className='flex  gap-4'>
         <Link to={'/Products'}> <button className='text-white pt-2'>Products</button></Link>
              <Link to={'/wishlist'}> <button className='text-white pt-2'>Wishlist</button></Link>
            <Link to={'/Cart'}> <button className='text-white pt-2'>Cart</button></Link>
          </div>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
