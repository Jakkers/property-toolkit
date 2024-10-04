"use client";
import { useEffect, useState } from "react";

export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    // Load the HubSpot form script
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      // Create the HubSpot form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "145325737",
          formId: "0bddf74b-61db-487d-ada1-cf3abb867a3d",
          target: "#hubspotForm",
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleFormSubmit = (e) => {
    if (!isChecked) {
      e.preventDefault();
      setFormError("You must agree to the privacy policy before submitting.");
    } else {
      setFormError("");
    }
  };

  return (
    <div>
      {/* HubSpot Form */}
      <div id="hubspotForm"></div>

      {/* Privacy Policy Checkbox */}
      <div className="mt-4">
        <input
          type="checkbox"
          id="privacyCheckbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="mr-2"
        />
        <label htmlFor="privacyCheckbox" className="text-sm text-gray-700">
          I agree to the{" "}
          <a href="/privacy-policy" className="text-pt-orange">
            Privacy Policy
          </a>{" "}
          and consent to the processing of my personal data.
        </label>
      </div>

      {/* Error message */}
      {formError && <p className="text-red-500 mt-2">{formError}</p>}

      {/* Submit Button */}
      <button
        onClick={handleFormSubmit}
        className={`mt-6 px-6 pb-2 md:px-8 py-2 md:py-3 bg-pt-orange text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200 ${
          !isChecked && "opacity-50 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </div>
  );
}

// "use client";
// import { useEffect } from "react";

// export default function Form() {
//   useEffect(() => {
//     // Loading the Hubspot form script
//     const script = document.createElement("script");
//     script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
//     script.async = true;
//     script.onload = () => {
//       // Creating the HubSpot form
//       if (window.hbspt) {
//         window.hbspt.forms.create({
//           region: "eu1",
//           portalId: "145325737",
//           formId: "0bddf74b-61db-487d-ada1-cf3abb867a3d",
//           target: "#hubspotForm",
//         });
//       }
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return <div id="hubspotForm"></div>; // Element where the form will be rendered
// }
