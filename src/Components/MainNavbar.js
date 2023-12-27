import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/Logo.PNG";
import UserIcon from "../Assets/USER ICON.png";
import UserSVG from "../Assets/person-add.svg";
function MainNavbar() {
  return (
    <Navbar expand="md" className="navbar is-fixed-top is-transparent">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="logo" src={Logo} alt="E90" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: "100%" }}
            navbarScroll
          >
            <Nav.Link className="CLASSS" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="CLASSS" href="/products">
              Shop
            </Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Women</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/signin">SignIn</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/">Link</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
            <br />
            
          </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
