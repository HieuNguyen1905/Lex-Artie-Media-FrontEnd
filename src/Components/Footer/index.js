import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image} from "react-bootstrap";
import logo from "../Assets/logo.png"
import Offcanvas from "react-bootstrap/Offcanvas";
import "./style.css";

const Footer = () => {
  return (
    <Navbar key="sm" bg="light" expand="sm" className="mb-6 footer">
    <Container fluid>
      <Navbar.Brand href="#"><h1 className="footerh1">Lex Artie Media</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-sm`}
        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <a  href="https://www.facebook.com/lexArtieMedia" target="_blank" >
            <Image
              src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
              className="footerlogo"
            ></Image>
          </a>
          <a  href="https://www.instagram.com/hi_alexdabao/?igshid=ZjE2NGZiNDQ%3D" target="_blank">
            <Image
              src="https://www.theexaminernews.com/examiner-news/wp-content/uploads/2021/09/instagram-logo-transparent.png"
              className="footerlogo"
            ></Image>
          </a>
          <a  href="https://www.tiktok.com/@hi_alexdabao" target="_blank">
            <Image
              src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjkwOC1jYS03Ml8xLnBuZw.png"
              className="footerlogo"
            ></Image>
          </a>
          <a  href="https://lexartie.pic-time.com/portfolio?fbclid=IwAR1rGBEaQDX04ALAA0pR0G1ZP356UXp3NYOnRf1_nyXhBytY0CiE0EQ1bRs" target="_blank" >
            <Image
              src={logo}
              className="footerlogo"
            ></Image>
          </a>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>

  );
};

export default Footer;
