import axios from "axios";
import react from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
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

const Course = ({course ,update }) => {

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        console.log("Success");
        toast.success("Courses has been Deleted Successfully",{
          position: "bottom-center"
        });
        update(id);
      },
      (error)=>{
        console.log("error");
        toast.error("Something went wrong",{
          position: "bottom-center"
        });
      }
    )
  }

  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="font-weight-bold">
            {course.title}
          </CardSubtitle>
          <CardText>{course.description}</CardText>
          <Container className="text-center">
            <Button color="danger me-3" onClick={()=>{
              deleteCourse(course.id);
            }}>Delete</Button>
            <Button color="warning">Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
