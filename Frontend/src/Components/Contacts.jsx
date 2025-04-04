import React from "react";
import { Link } from "react-router-dom";
import contact from "../../public/contact.jpg";
const Contacts = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 flex flex-col md:flex-row">
        <div className="w-full order-2  py-10 md:order-1 md:w-1/2 mt-12 md:mt-24">
          <div className="space-y-12">
            <h1 className="text-2xl md:text-4xl font-bold">
              {/* Hello, welcomes here to learn something{" "} */}
              <span className="text-pink-500">Contact Us :)</span>
            </h1>
            <h1 className="text-5xl font-serif font-semibold">
              Need help? We're here for you{" "}
              <span className="text-pink-500">24/7</span>
            </h1>
            <p className="text-sm font-serif md:text-lg">
              Our dedicated team of growth expert is ready to help around tho
              clock. untitled simplifies grouth and programmatis SEO,allowing
              our team to concentrate on moving the business frowaed. it's a
              pleasure to collaborate with wxperts wgo really know their fild!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
              <div className=" py-4 font-semibold">
                Our Helpline number{" "}
                <span className="text-pink-500">+96 908366280</span>{" "}
              </div>
            </p>

            <div className="join">
              <div>
                <label className="input validator join-item dark:bg-slate-900 dark:text-white">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint  hidden">
                  Enter valid email address
                </div>
              </div>
              <button className="btn bg-green-500 text-white hover:bg-green-600 duration-300 join-item">
                Join
              </button>
            </div>
          </div>
          <div className="mt-20 px-32 md:px-96">
            <Link to="/">
              <button className="bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300 ">
                Back
              </button>
            </Link>
          </div>
        </div>

        <div className="  order-1 w-full md:w-1/2">
          <img src={contact} className="py-20   rounded-full px-10 " alt="" />
        </div>
      </div>
    </>
  );
};

export default Contacts;
