import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar className='bg-custom' dark expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <Button variant="primary">Binary Car</Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#ourservices">Our Services</Nav.Link>
            <Nav.Link href="#whyus">Why Us</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
