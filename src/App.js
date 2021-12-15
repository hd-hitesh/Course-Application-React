import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./component/Home";
import Course from "./component/Course";
import Allcourses from "./component/Allcourses";
import AddCourse from "./component/AddCourse";
import Header from "./component/Header";
import Menus from "./component/Menus";

function App() {
  const btnHandle = () => {
    toast.success("Done!", {
      position: "top-center",
    });
  };

  return (
    <div>
      <ToastContainer />

      <Container>
        <Header/>
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col md={8}>
            <Home/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
