import { Component } from "react";
import { Form,Button } from "react-bootstrap";

class Sidebar extends Component {
  render() {
    return (
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Scrivi il tuo commento</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button className="mt-2">Aggiungi</Button>
      </Form.Group>
      </Form>
    );
  }
}


export default Sidebar