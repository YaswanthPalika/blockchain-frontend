import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg" className="nav1">
      <Container fluid>
        <Navbar.Brand href="/">Blockchain</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tender">Tender Officers</Nav.Link>
            <Nav.Link href="/bidderlogin">Bidders</Nav.Link>
            <Nav.Link href="/visualization">Visualization</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
