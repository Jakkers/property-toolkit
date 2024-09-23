"use client";
import { useEffect } from "react";

export default function Form() {
  useEffect(() => {
    // Loading the Hubspot form script
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      // Creating the HubSpot form
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

  return <div id="hubspotForm"></div>; // Element where the form will be rendered
}
