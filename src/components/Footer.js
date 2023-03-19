import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter, BsFillEnvelopeAtFill, BsTwitch } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="text-start text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={3} md={6} mb={3} mb-md-0>
            <h5 className="text-star">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>

          <Col lg={3} md={6} mb={3} className="text-md-start">
            <ul className="list-unstyled mb-0 text-start text-lg-start">
              <li>
                <a href="#services" className="text-dark text-decoration-none">Our services</a>
              </li>
              <li>
                <a href="#why-us" className="text-dark text-decoration-none">Why Us</a>
              </li>
              <li>
                <a href="#testimonial" className="text-dark text-decoration-none">Testimonial</a>
              </li>
              <li>
                <a href="#faq" className="text-dark text-decoration-none">FAQ</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} mb={3}>
            <ul className="list-unstyled mb-0 d-flex">
              <li className="me-4">
                <a href="#!" className="text-dark text-decoration-none"><BsFacebook style={{ color: '#2d00e1' }} /></a>
              </li>
              <li className="me-4">
                <a href="#!" className="text-dark text-decoration-none"><BsInstagram style={{ color: '#2d00e1' }} /></a>
              </li>
              <li className="me-4">
                <a href="#!" className="text-dark text-decoration-none"><BsTwitter style={{ color: '#2d00e1' }} /></a>
              </li>
              <li className="me-4">
                <a href="#!" className="text-dark text-decoration-none"><BsFillEnvelopeAtFill style={{ color: '#2d00e1' }} /></a>
              </li>
              <li className="me-4">
                <a href="#!" className="text-dark text-decoration-none"><BsTwitch style={{ color: '#2d00e1' }} /></a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} mb={3}>
            <h5 className="text-star">Copyright Binar 2022</h5>
            <button className="btn btn-primary">Register</button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
