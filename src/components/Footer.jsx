import { Container, Row, Col } from 'react-bootstrap';
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsFillEnvelopeAtFill,
    BsTwitch,
} from 'react-icons/bs';
import '../style/customColor.css';

const Footer = (props) => {
    return (
        <footer className='text-start text-lg-start' style={{ marginTop: props.marginTop }}>
            <Container className='p-4'>
                <Row>
                    <Col className="mb-md-0">
                        <h5 className='text-star'>
                            Jalan Suroyo No. 161 Mayangan Kota Probolonggo
                            672000
                        </h5>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </Col>

                    <Col className='text-md-start'>
                        <ul className='list-unstyled mb-0 text-start text-lg-start'>
                            <li>
                                <a
                                    href='#services'
                                    className='text-dark text-decoration-none'
                                >
                                    Our services
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#why-us'
                                    className='text-dark text-decoration-none'
                                >
                                    Why Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#testimonial'
                                    className='text-dark text-decoration-none'
                                >
                                    Testimonial
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#faq'
                                    className='text-dark text-decoration-none'
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <ul className='list-unstyled mb-0 d-flex'>
                            <li className='me-4'>
                                <a
                                    href='#!'
                                    className='text-dark text-decoration-none'
                                >
                                    <BsFacebook size={30} style={{ color: '#0D28A6' }} />
                                </a>
                            </li>
                            <li className='me-4'>
                                <a
                                    href='#!'
                                    className='text-dark text-decoration-none'
                                >
                                    <BsInstagram size={30} style={{ color: '#0D28A6' }} />
                                </a>
                            </li>
                            <li className='me-4'>
                                <a
                                    href='#!'
                                    className='text-dark text-decoration-none'
                                >
                                    <BsTwitter size={30} style={{ color: '#0D28A6' }} />
                                </a>
                            </li>
                            <li className='me-4'>
                                <a
                                    href='#!'
                                    className='text-dark text-decoration-none'
                                >
                                    <BsFillEnvelopeAtFill size={30}
                                        style={{ color: '#0D28A6' }}
                                    />
                                </a>
                            </li>
                            <li className='me-4'>
                                <a
                                    href='#!'
                                    className='text-dark text-decoration-none'
                                >
                                    <BsTwitch size={30} style={{ color: '#0D28A6' }} />
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h5 className='text-star'>Copyright Binar 2022</h5>
                        <button className='btn btn-primary'>Register</button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
