import react, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {
  useEffect(() => {
    document.title = "All Courses || Learn code with Hitesh";
  }, []);

  // function to call server

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        //Success
        console.log(response.data);
        toast.success("Courses has been loaded",{
          position: "bottom-center"
        });
        setCourses(response.data);
      },
      (error) => {
        //error
       console.log(error);
        toast.error("Something went wrong",{
          position: "bottom-center"
        });
      }
    );
  };
  // calling loading course function

  useEffect(()=>{
    getAllCoursesFromServer();
  },[]);


  const [courses, setCourses] = useState([
    // { title: "Java Course", decription: "This is the demo Course" },
    // { title: "Python Course", decription: "This is the demo Course" },
    // { title: "Django Course", decription: "This is the demo Course" },
    // { title: "Spring Course", decription: "This is the demo Course" },
  ]);

  const updateCourses=(id)=>{
      setCourses(courses.filter((c)=>c.id!=id));
  }

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses are as follows.</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses}></Course>)
        : "No Courses"}
    </div>
  );
};

export default Allcourses;
