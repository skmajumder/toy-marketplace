import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <PageTitle pageTitle={"Sign In"} />
      <section className="section-login">
        <div className="container px-10">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-md w-full px-6 py-8 bg-gray-100 shadow-md rounded-md">
              <h2 className="text-3xl font-semibold text-center">Sign In</h2>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 mt-4 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    Sign In
                  </button>
                </div>
                {/* <div className="flex items-center justify-between mt-4">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div> */}
                <div className="mt-6">
                  <GoogleLogin />
                </div>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link
                    to={"/register"}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
