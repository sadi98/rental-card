import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import imgphoto from '../assets/images/img_photo.png';
import imgphotos from '../assets/images/img_photos.png';
import { useState } from 'react';

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='mt-5'>
            <Container fluid='md'>
                <Row>
                    <Col sm={12} md={12}>
                        <h3 className='text-center'>Testimonial</h3>
                        <p className='text-center'>
                            Berbagai review positif dari para pelanggan kami
                        </p>
                    </Col>
                </Row>
                <Carousel
                     id='carouselExampleControlsNoTouching'
                     activeIndex={index}
                     onSelect={handleSelect}
                     controls={false}
                     touch={false}
                     interval={null}
                >
                    <Carousel.Item>
                        <Card>
                            <Card.Body className='text-center'>
                                <Row className='justify-content-center align-items-center'>
                                    <Col
                                       xs={12}
                                       md={2}
                                       className='text-center mb-2 mb-md-0'
                                   >
                                        <img
                                            className='d-block mx-auto w-10'
                                            src={imgphoto}
                                            alt='First slide'
                                        />
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <div className='d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                                            <div className='stars'>
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                            </div>
                                            <p className='mt-3 text-center text-lg-start'>
                                                “Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod lorem ipsum dolor sit
                                                amet, consectetur adipiscing
                                                elit, sed do eiusmod lorem ipsum
                                                dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod”
                                            </p>
                                            <span className='text-muted mt-3 text-center text-lg-start'>
                                                Sadi Nur Sholeihin 25, Jakarta
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                            <Row className='justify-content-center align-items-center'>
                                    <Col
                                       xs={12}
                                       md={2}
                                       className='text-center mb-2 mb-md-0'
                                   >
                                        <img
                                            className='d-block mx-auto w-10'
                                            src={imgphotos}
                                            alt='First slide'
                                        />
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <div className='d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                                            <div className='stars'>
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                            </div>
                                            <p className='mt-3 text-center text-lg-start'>
                                                “Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod lorem ipsum dolor sit
                                                amet, consectetur adipiscing
                                                elit, sed do eiusmod lorem ipsum
                                                dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod”
                                            </p>
                                            <span className='text-muted mt-3 text-center text-lg-start'>
                                                John Dee 32, Bromo
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                            <Row className='justify-content-center align-items-center'>
                                    <Col
                                       xs={12}
                                       md={2}
                                       className='text-center mb-2 mb-md-0'
                                   >
                                        <img
                                            className='d-block mx-auto w-10'
                                            src={imgphoto}
                                            alt='First slide'
                                        />
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <div className='d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                                            <div className='stars'>
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                                <AiFillStar
                                                    style={{ color: '#ffc107' }}
                                                />
                                            </div>
                                            <p className='mt-3 text-center text-lg-start'>
                                                “Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod lorem ipsum dolor sit
                                                amet, consectetur adipiscing
                                                elit, sed do eiusmod lorem ipsum
                                                dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod”
                                            </p>
                                            <span className='text-muted mt-3 text-center text-lg-start'>
                                                Ita Purnamasari 24, Padang
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <div className='row justify-content-center mt-3'>
                <div className='col-3 text-center d-flex flex-row justify-content-center'>
                    <button
                        className='rounded-circle mx-1 p-2 tombol-prev'
                        onClick={() => setIndex(index === 0 ? 2 : index - 1)}
                    >
                        <BiChevronLeft />
                    </button>
                    <button
                        className='rounded-circle p-2 mx-1 tombol-next'
                        onClick={() => setIndex(index === 2 ? 0 : index + 1)}
                    >
                        <BiChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
