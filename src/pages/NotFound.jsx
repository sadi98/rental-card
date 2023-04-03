import { Card, Container, Row } from "react-bootstrap";

const NotFound = () => {
    return (
        <>
            <Container>
                <Row style={{ height:'100px', marginTop:'200px', textAlign:'center' }}>
                    <Card>
                        <Card.Body>
                            <h1>NOT FOUND</h1>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default NotFound;