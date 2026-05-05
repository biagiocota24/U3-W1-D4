import { Component } from "react";
import{Form,Button} from "react-bootstrap"

class CommentArea extends Component {
  render() {
    return (
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="CommentArea">
          <Form.Label>Scrivi un commento</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button>Aggiungi</Button>
      </Form>
    );
  }
}

export default CommentArea;
