import React from "react";
import { Link } from "react-router-dom";
import book from "../../public/book.jpg";
import Login from "./Login";

const Abouts = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 flex flex-col md:flex-row">
        <div className="w-full order-2  py-1 md:order-1 md:w-1/2 mt-12 md:mt-24">
          <h1 className=" text-pink-500 py-4 font-mono md:text-2xl font-bold">
            About us!!! <br />
          </h1>
          <div className="space-y-12">
            <span className="text-5xl font-serif font-semibold">
              Helping businesses succees
              <br /> through the power of video.
            </span>
            <p className="text-sm font-serif md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,et
              totam. Tempora amet atque expedita, quae corrupti totam send to
              pariatur corporis at veniam est voluptas animi! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Dolor, et totam. Tempora
              amet atque expedita, quae corrupti totam sed pariatur corporis at
              veniam est voluptas animi.
            </p>
          </div>
          <div className=" items-center px-3  py-20">
            <Link
              to="/singup"
              className=" text-white bg-green-500 hover:bg-green-600 py-3 px-4 rounded-lg  cursor-pointer"
            >
              Singup
            </Link>{" "}
          </div>
        </div>
        <div className="  order-1 w-full md:w-1/2">
          <img src={book} className="py-20  rounded-full px-4 " alt="" />
        </div>
      </div>
    </>
  );
};

export default Abouts;
