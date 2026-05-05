import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.props.searchQuery}
                onChange={(e) => this.props.onSearchChange(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.props.searchQuery.toLowerCase()),
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook
                  book={b}
                  selected={this.props.selectedBook?.asin === b.asin}
                  onSelectBook={this.props.onSelectBook}
                />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
