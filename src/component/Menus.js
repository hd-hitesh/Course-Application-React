import react from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


function Menus() {
  return (
    <div>
      <ListGroup>
        <ListGroupItem color="success" tag="a" href="#!">Home</ListGroupItem>
        <ListGroupItem color="info" tag="a" href="#!">Add Courses</ListGroupItem>
        <ListGroupItem color="info" tag="a" href="#!">View Courses</ListGroupItem>
        <ListGroupItem color="warning" tag="a" href="#!">About us</ListGroupItem>
        <ListGroupItem color="danger" tag="a" href="#!">Contact us</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Menus;
