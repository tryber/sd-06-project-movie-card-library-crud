import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Movie Card Library</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
        </Navbar>
      </Container>
    );
  }
}

export default Header;
