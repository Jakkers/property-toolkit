import React from "react";

const PlaceholderForm = () => {
  return (
    <form className="flex flex-col w-[400px]">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
      ></textarea>
      <button className="text-left" type="submit">
        Submit
      </button>
    </form>
  );
};

export default PlaceholderForm;
