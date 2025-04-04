import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Singup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center  ">
        <div className="border-[2px]  shadow-xl px-14 rounded-md bg-slate-200 py-10">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold  dark:text-black text-lg">
                Singup{" "}
                <Link to="/" className=" px-24">
                  ❌
                </Link>
              </h3>

              <div className="px-1 dark:text-black font-serif mt-4">Name</div>
              <div className="px-1 ">
                <input
                  type="text"
                  className="grow rounded-xl text-center font-sans bg-slate-300"
                  placeholder="Enter Your Full Name"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="px-1 dark:text-black font-serif mt-4">Email</div>
              <div className="px-1 ">
                <input
                  type="email"
                  className="grow rounded-xl text-center font-sans bg-slate-300"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="px-1 dark:text-black font-serif  mt-4">
                Password
              </div>
              <input
                type="password"
                className="grow rounded-xl text-center font-sans bg-slate-300"
                placeholder="Enter Your password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <div className="flex mt-4 gap-12">
                {" "}
                <button className="bg-pink-500 hover:bg-pink-700 duration-200 text-white px-3 py-1 rounded-lg">
                  Singup
                </button>{" "}
                <p className="dark:text-black">
                  Have Account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singup;
