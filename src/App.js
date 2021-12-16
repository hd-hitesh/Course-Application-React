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
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const btnHandle = () => {
    toast.success("Done!", {
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/add-course" component={AddCourse} />
                <Route path="/view-courses" component={Allcourses} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
