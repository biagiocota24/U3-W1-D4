import { Component } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
const APIcomment =
  "https://69f9072970da2edb3e9bfcf6.mockapi.io/bookapp/comments";

class CommentArea extends Component {
  state = {
    comment: "",
    rating: "",
  };
  saveComment = () => {
    fetch(APIcomment, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: this.state.comment,
        rating: this.state.rating,
        asin: this.props.selectedBook.asin,
        time: new Date()
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <Form>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3 d-flex flex-column align-items-center w-100"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            className="mb-2"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Rate"
          className="mb-3 d-flex flex-column align-items-center w-100"
        >
          <Form.Control
            type="number"
            min={1}
            max={10}
            placeholder="Rate"
            className="mb-2"
            value={this.state.rating}
            onChange={(e) => this.setState({ rating: e.target.value })}
          />
        </FloatingLabel>
        <Button className="w-50" onClick={this.saveComment}>
          Add
        </Button>
      </Form>
    );
  }
}

export default CommentArea;
