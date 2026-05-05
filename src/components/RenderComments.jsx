import ListGroup from "react-bootstrap/ListGroup";

function ShowComments(props) {
  return (
    <ListGroup>
      {props.selectedBook.map((comment) => (
        <ListGroup.Item>{comment.comment}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ShowComments;
