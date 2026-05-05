import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {

  render() {
    return (
      <Card style={{border: this.props.selected ? "2px solid green" : "none"}} className="h-100">
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
          <Card.Text className="d-flex flex-column">
            <span>{this.props.book.price}€</span>
            <span>ASIN: {this.props.book.asin}</span>
          </Card.Text>
          <Button variant="primary">Add Comment</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
