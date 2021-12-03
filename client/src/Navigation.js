import { Navbar, Nav, Container } from 'react-bootstrap';
import { useContext, useState } from 'react';
import UserContext from './context';


function Navigation() {
  const userContext = useContext(UserContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Bad Bank</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#createaccount">Create Account</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#deposit">Deposit</Nav.Link>
          <Nav.Link href="#withdraw">Withdraw</Nav.Link>
          <Nav.Link href="#transfer">Transfer</Nav.Link>
        </Nav>
        <Nav.Item>
          <Nav.Link>{userContext.loggedIn.name}</Nav.Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default Navigation;
