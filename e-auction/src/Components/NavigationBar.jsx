import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

export function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">E-Auction</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Link to="/addcar" className="nav-link">
              Add Car
            </Link>
            <Link to="/aboutus" className="nav-link">
              About Us
            </Link>
            <Nav.Link href="aboutus">Collaborators</Nav.Link>
          </Nav>
          <Nav>

            <Link to="/login">
              <Button variant="danger" className="me-2">
                Log In
              </Button></Link>
              <Link to="/signup">
              <Button variant="danger" className="me-2">
                Sign Up 
              </Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
