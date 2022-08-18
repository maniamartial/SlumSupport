import Carousel from "react-bootstrap/Carousel";
import home5 from "./home5.jpg";
import home6 from "./home6.jpg";
import home3 from "./home3.jpg";
import home4 from "./home4.jpg";

function Slider() {
  return (
    <Carousel variant="dark" className="carousel-height">
      <Carousel.Item className="c-image">
        <img className="d-block w-100 " src={home6} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="c-image">
        <img className="d-block w-100" src={home5} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="c-image">
        <img className="d-block w-100" src={home3} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="c-image">
        <img className="d-block w-100" src={home4} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
