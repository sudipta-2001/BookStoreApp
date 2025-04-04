import React from "react";
import Navbar from "../Components/Navbar";
import Coursr from "../Components/Coursr";
import Fotter from "../Components/Fotter";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <Coursr />
      </div>
      <Fotter />
    </>
  );
}

export default Courses;
