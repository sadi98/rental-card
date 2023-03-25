import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/navigationBar.css';

const NavigationBar = () => {

    const beranda = useNavigate();
    return (
        <Navbar className='bg-custom' expand='md'>
            <Container>
                <Navbar.Brand href='#home'>
                    <Button variant='primary' onClick={ () => beranda('/')}>Binary Car</Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav' />
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='#ourservices'>Our Services</Nav.Link>
                        <Nav.Link href='#whyus'>Why Us</Nav.Link>
                        <Nav.Link href='#testimonial'>Testimonial</Nav.Link>
                        <Nav.Link href='#faq'>FAQ</Nav.Link>
                        <a href="#" className="btn btn-success">Register</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
