import react from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";

const Course = ({course}) => {
  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
          <CardText>{course.description}</CardText>
          <Container className="text-center">
            <Button color="danger me-3">Delete</Button>
            <Button color="warning">Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
