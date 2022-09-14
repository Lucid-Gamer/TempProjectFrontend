import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mainLogo from '../Images/Company-Name.png'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className='container-fixed'>
        <Navbar className='navbar navbar-expand-lg navbar-dark' bg='success' expand="lg">
          <Container>
            <Navbar.Brand href="/"><img src={mainLogo} alt='Not Found' width='250px'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav-group">
                <Nav.Link href="/employees">Employees</Nav.Link>
                <Nav.Link href="/add-employee">Add Employee</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/ticket/all"> List Tickets</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Create Tickets</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/add-employee'>Signup</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
