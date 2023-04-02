import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/navigationBar.css';

const NavigationBar = (props) => {

    const beranda = useNavigate();
    return (
        <div>
            <Navbar className='bg-custom' expand='md' style={{ paddingBottom : props.paddingBottom  }}>
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
        </div>
    );
};

export default NavigationBar;
