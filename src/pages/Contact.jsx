import React from "react";
import { useLocation } from "react-router-dom";

const Contact = ({ passRef }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center mt-10 mb-4">
      <div className="flex flex-col items-center mb-4 w-full max-w-lg p-5 border border-gray-300 rounded-md">
        <h1 className="text-4xl mb-4">CONTACT</h1>
        <hr className="border-0 h-px bg-gray-300 my-5 w-full" />
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-1 text-sm font-medium">
            Name
          </label>
          <input
            ref={passRef}
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="mb-2 p-2 border border-gray-300 rounded-md"
          />

          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            className="mb-2 p-2 border border-gray-300 rounded-md"
          />

          <label htmlFor="phone" className="mb-1 text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone"
            className="mb-2 p-2 border border-gray-300 rounded-md"
          />

          <label htmlFor="message" className="mb-1 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="mb-2 p-2 border border-gray-300 rounded-md h-24"
          />

          <div className="flex justify-center w-full mt-4">
            <button className="bg-yellow-500 text-white rounded-md h-10 w-full hover:bg-blue-600 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
