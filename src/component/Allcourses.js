import react, { useState } from "react";
import Course from "./Course";

 const Allcourses=()=> {

    const [courses, setCourses]=useState([
        {title:"Java Course", decription:"This is the demo Course"},
        {title:"Python Course", decription:"This is the demo Course"},
        {title:"Django Course", decription:"This is the demo Course"},
        {title:"Spring Course", decription:"This is the demo Course"}
    ])

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows.</p>
            {
                courses.length>0 ? courses.map((item)=>(
                    <Course course={item}></Course>
                ))  : "No Courses"
            }
        </div>
    );
};

export default Allcourses;
