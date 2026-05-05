import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = function () {
  return (
    <Navbar expand="lg" className="bg-black" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="https://img.pikbest.com/png-images/20241016/creative-book-logo-vector-design_10968791.png!sw800" alt="logo-book" style={{width:"60px"}}/>
          <span className="ps-2">E-books App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
