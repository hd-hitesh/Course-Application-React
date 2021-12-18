import react from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


function Menus() {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action list-group-item-success"  tag="a" to="/">Home</Link>
        <Link className="list-group-item list-group-item-action list-group-item-info"  tag="a" to="/add-course">Add Courses</Link>
        <Link className="list-group-item list-group-item-action list-group-item-warning"  tag="a" to="/view-courses">View Courses</Link>
        <Link className="list-group-item list-group-item-action list-group-item-danger"  tag="a" to="#!">About us</Link>
        <Link className="list-group-item list-group-item-action list-group-item-success"  tag="a" to="#!">Contact us</Link>
      </ListGroup>
    </div>
  );
}

export default Menus;
