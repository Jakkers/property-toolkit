// import React from "react";

// const PlaceholderForm = () => {
//   return (
//     <form className="flex flex-col w-[400px]">
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" placeholder="Enter your name" />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         placeholder="Enter your email"
//       />
//       <label htmlFor="message">Message:</label>
//       <textarea
//         id="message"
//         name="message"
//         placeholder="Enter your message"
//       ></textarea>
//       <button className="text-left" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default PlaceholderForm;

import React from "react";

const PlaceholderForm = () => {
  return (
    <form className="flex flex-col w-full max-w-2xl mx-auto space-y-4">
      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-white text-left font-medium mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pt-orange"
          required
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-white text-left font-medium mb-1"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pt-orange"
          required
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-white text-left font-medium mb-1"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          className="p-3 h-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pt-orange"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="py-3 px-6 bg-pt-orange text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default PlaceholderForm;
