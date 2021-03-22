import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './NavArea.css';

const NavSection = () => {
  return (
    <Container fluid>
      <Navbar bg="light" className="p-2" expand="lg">
        <Link to="/">
          <Navbar.Brand>QR code Generator</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="text-center" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/">
              <li className="nav-link">Home</li>
            </Link>
            <Link to="/data">
              <li className="nav-link">Get All QRCode</li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavSection;
