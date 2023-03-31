import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
    return (
      <>
          <Navbar key="md" bg="light" expand="lg" className="mb-6">
            <Container fluid>
              <Navbar.Brand href="#">Lex Artie Media</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">About me</Nav.Link>
                    <NavDropdown
                      title="Gallery"
                      id={`offcanvasNavbarDropdown-expand-md`}
                    >
                      <NavDropdown.Item href="#action3">Wedding</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4">
                        Couple
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Portrait
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action6">
                        Films
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contactme">Contact</Nav.Link>
                    <Nav.Link href="#action2">Book now</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
    );
  }
  
export default Header;
