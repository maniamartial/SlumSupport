import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import pic1 from "../Home/home1.jpg";
import pic2 from "../Home/home2.jpg";
import pic3 from "../Home/home3.jpg";
import pic4 from "../Home/home4.jpg";
function Posts() {
  return (
    <Container>
      <Row bg="red" className="container-row">
        <Col className="left-sidebar">1 of 3</Col>
        <Col xs={8} className="central-container">
          <div></div>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={pic1} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Subtitle className="subtitle">
                      19 Aug 2022
                    </Card.Subtitle>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <button type="type" className="btn btn-outline-secondary">
                      Read More
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="right-sidebar">3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Posts;
