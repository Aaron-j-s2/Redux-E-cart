import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <img src="https://cdn-icons-png.flaticon.com/512/7058/7058475.png" width={60} alt="" />
          <Navbar.Brand href="/">Aaron Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/Products'>Products</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
