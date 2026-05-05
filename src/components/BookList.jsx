import fantasy from "../assets/BOOKS/fantasy.json";
import scifi from "../assets/BOOKS/scifi.json";
import romance from "../assets/BOOKS/romance.json";
import horror from "../assets/BOOKS/horror.json";
import history from "../assets/BOOKS/history.json";
import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Row } from "react-bootstrap";

class Booklist extends Component {
//   state = {
//     books: fantasy,
//   };
  render() {
    return (
      <Row xs={2} md={3} lg={4} xl={5} className="my-4 gy-3">
        {this.props.books.map((book) => {
          return (
            <Col key={book.asin} className="d-flex flex-column"
            onClick={()=> this.props.onSelect(book)} >
              <SingleBook book={book} selected={this.props.selected?.asin === book.asin} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Booklist;
