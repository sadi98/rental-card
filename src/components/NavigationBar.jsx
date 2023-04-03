import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../style/navigationBar.css';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';

const NavigationBar = (props) => {

    const beranda = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth"});
        // setShow(false);
    }
    return (
        <div>
            <Navbar className='bg-custom' expand='md' style={{ paddingBottom : props.paddingBottom  }}>
                <Container>
                    <Navbar.Brand href='#home'>
                        <Button variant='primary' onClick={ () => beranda('/')}>Binary Car</Button>
                    </Navbar.Brand>
                    
                    <Button variant="outline-dark" className="ms-2 d-md-none" onClick={handleShow}>
                        <BsList style={{color:'black'}}/>
                    </Button>
                    <Navbar.Collapse id='navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/#ourservices'>Our Services</Nav.Link>
                            <Nav.Link href='/#whyus'>Why Us</Nav.Link>
                            <Nav.Link href='/#testimonial'>Testimonial</Nav.Link>
                            <Nav.Link href='/#faq'>FAQ</Nav.Link>
                            {/* <a href="#" className="btn btn-success">Register</a> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: '50%' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='ms-3'>BCR</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='flex-column'>
                    <Link to='/#ourservices' style={{color: 'black'}} className='nav-link' onClick={() => handleClick('ourservices')}>Our Services</Link>
                        <Link to='/#whyus' style={{color: 'black'}} className='nav-link' onClick={() => handleClick('whyus')}>Why Us</Link>
                        <Link to='/#testimonial' style={{color: 'black'}} className='nav-link' onClick={() => handleClick('testimonial')}>Testimonial</Link>
                        <Link to='/#faq' style={{color: 'black'}} className='nav-link' onClick={() => handleClick('faq')}>FAQ</Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default NavigationBar;
