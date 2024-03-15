import { useEffect } from "react";
import Course from "./Course";
import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  // console.log(courses);

  useEffect(() => {
    fetch("..//..//..//public/courses.json")
      .then((res) => res.json())
      .then((course) => setCourses(course));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {courses.map((course) => (
        <Course key={course.id} course={course}/>
      ))}
    </div>
  );
};

export default Courses;
