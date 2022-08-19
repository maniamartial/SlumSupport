import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic1 from "../components/Home/home3.jpg";

function Post() {
  return (
    <div className="container-post">
      {" "}
      Post
      <Card className="post-card">
        <Card.Img
          variant="top"
          src={pic1}
          height="400px"
          className="post-image"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
