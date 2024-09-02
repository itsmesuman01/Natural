import React, { useState } from "react";
import { main } from "../assets/assets";
import { user, bearerToken } from "../assets/api";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    if (email === user.email && password === user.password) {
      localStorage.setItem("token", bearerToken.token);
      console.log("Login Successfully");
    } else {
      console.error("Login Failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 grid place-items-center z-50">
      <form
        onSubmit={submitForm}
        className="bg-white p-6 rounded-lg shadow-lg w-[min(23vw,330px)] text-gray-600 flex flex-col gap-6 animate-fadeIn"
      >
        <div className="flex justify-between items-center text-black">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={main.cross_icon}
            alt="Close"
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Sign up" && (
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="outline-none border border-gray-300 p-2 rounded-md"
            />
          )}
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="outline-none border border-gray-300 p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="outline-none border border-gray-300 p-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border-none p-2 rounded-md text-white bg-yellow-500 text-lg cursor-pointer"
        >
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>
        {currState === "Sign up" && (
          <div className="flex items-start gap-2 mt-[-3px]">
            <input type="checkbox" required className="outline-none" />
            <p>Terms and the conditions</p>
          </div>
        )}
        <p>
          {currState === "Login" ? (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign up")}
                className="text-yellow-500 font-medium cursor-pointer"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-yellow-500 font-medium cursor-pointer"
              >
                Login here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
