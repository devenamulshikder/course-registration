import { useState } from "react";
import Cart from "./components/Cart";
import Courses from "./components/Courses";


function App() {
  const [carts, setCarts]= useState([])
  const handleCourseSelection = (course)=>{
    console.log(course);
    setCarts(c=> [...c, course])
  }
  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center my-8">
            Course Registration
          </h1>
          <div className="grid grid-cols-12">
            <div className="col-span-10">
              <Courses handleCourseSelection={handleCourseSelection}></Courses>
            </div>
            <div className="col-span-2">
              <Cart carts={carts}></Cart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
