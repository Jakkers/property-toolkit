import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 md:p-12 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#303c81] mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          At <strong>Property Toolkit</strong>, we are committed to protecting
          your privacy and ensuring transparency in how we collect, use, and
          store your personal data. This Privacy Policy outlines the types of
          data we collect and how we use it.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-2xl font-semibold text-[#303c81] mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We collect the following information when you interact with our
          website:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <strong>Personal Information</strong>: When you sign up for our
            services or opt into our offers, we collect information such as your
            name, email address, and phone number.
          </li>
          <li>
            <strong>Cookies</strong>: We use cookies to store information about
            your preferences and to analyze site usage for better performance
            and user experience. See our Cookie Policy for more details.
          </li>
          <li>
            <strong>Analytics Data</strong>: We use third-party services like
            HubSpot to collect analytics data, which includes information about
            your interactions with our site (e.g., pages visited, actions taken,
            time spent).
          </li>
        </ul>

        {/* 2. How We Use Your Information */}
        <h2 className="text-2xl font-semibold text-[#303c81] mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            Provide and improve our services, ensuring that you receive the best
            experience possible.
          </li>
          <li>
            Communicate with you regarding your account, our services, and any
            promotional offers.
          </li>
          <li>
            Analyze site traffic and usage patterns to improve website
            performance and user experience.
          </li>
          <li>
            Provide tailored content based on your preferences and interaction
            with our site.
          </li>
        </ul>

        {/* 3. Cookies and Tracking Technologies */}
        <h2 className="text-2xl font-semibold text-[#303c81] mt-8 mb-4">
          3. Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700 mb-4">
          We use cookies to enhance your browsing experience and for analytics
          purposes. By accepting cookies, you agree to the storage of cookies on
          your device and the collection of data through our analytics
          providers, such as HubSpot.
        </p>
        <p className="text-gray-700 mb-4">
          You can choose to opt-out of cookies at any time by adjusting your
          browser settings or using the &quot;Opt-out of Cookies&quot; button on
          our site. Please note that disabling cookies may impact your
          experience on our website.
        </p>

        {/* 4. Data Sharing */}
        <h2 className="text-2xl font-semibold text-[#303c81] mt-8 mb-4">
          4. Data Sharing
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell, rent, or share your personal data with third parties
          except in the following cases:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            With service providers like HubSpot who assist us in website
            analytics, marketing, and customer communication.
          </li>
          <li>
            To comply with legal obligations, such as responding to lawful
            requests or protecting our rights.
          </li>
        </ul>

        {/* 5. Your Rights */}
        <h2 className="text-2xl font-semibold text-[#303c81] mt-8 mb-4">
          5. Your Rights
        </h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, modify, or delete any personal
          information we have collected about you. To make such a request,
          please contact us at{" "}
          <a href="mailto:info@propertytoolkit.com" className="text-pt-orange">
            info@propertytoolkit.com
          </a>
          .
        </p>

        {/* 6. Changes to This Policy */}
        <h2 className="text-2xl font-semibold text-[#303c81] mt-8 mb-4">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the date of the latest update will be
          indicated at the top of the policy.
        </p>

        {/* Contact Us */}
        <h2 className="text-2xl font-semibold text-[#303c81] mt-8 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy, feel
          free to contact us at{" "}
          <a href="mailto:info@propertytoolkit.com" className="text-pt-orange">
            info@propertytoolkit.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
