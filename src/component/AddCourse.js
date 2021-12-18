import axios from "axios";
import react, {useEffect, Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

function AddCourse() {
  useEffect(() => {
    document.title = "Add Course || Learn code with Hitesh";
  }, []);

  const [course,setCourse]= useState({});

  //form handler function

  const handleForm = (e)=>{
    console.log(course);
    postDataToServer(course);
    e.preventDefault()
  }

  //creating fun to post data on server

  const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response);
        console.log("Success");
        toast.success("Courses has been Added Successfully",{
          position: "bottom-center"
        });
      },
      (error)=>{
        console.log(error); 
        console.log("error");
        toast.error("Something went wrong",{
          position: "bottom-center"
        });
      }
    )
  }

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter Here"
            name="userId"
            id="userId"
            onChange={(e)=>{
              setCourse({...course,id:e.target.value});
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter Title Here"
            name="title"
            id="title"
            onChange={(e)=>{
              setCourse({...course,title:e.target.value});
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter Description Here"
            name="description"
            id="description"
            style={{ height: 150 }}
            onChange={(e)=>{
              setCourse({...course,description:e.target.value});
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">Add Course</Button>
          <Button color="warning ms-2" type="reset">Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
}

export default AddCourse;
