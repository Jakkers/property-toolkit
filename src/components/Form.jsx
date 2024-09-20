// export default function Form() {
//     return (
//         <>
//         <script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/embed/v2.js"></script>
// <script>
//   hbspt.forms.create({
//     region: "eu1",
//     portalId: "145325737",
//     formId: "0bddf74b-61db-487d-ada1-cf3abb867a3d"
//   });
// </script></>
//     )
// }
"use client";
import { useEffect } from "react";

export default function Form() {
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
          target: "#hubspotForm", // Specify the target element for the form
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspotForm"></div>; // Element where the form will be rendered
}
