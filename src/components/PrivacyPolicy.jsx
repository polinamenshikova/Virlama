import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <div className="w-full md:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Privacy Policy
          </span>

          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Effective on October 12, 2024
          </span>

          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            Privacy Policy
          </h1>

          <div className="flex flex-col w-full text-left">
            {/* Section 1 */}
            <h2 className="text-2xl mb-3 font-bold">
              1. Information We Collect
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              We collect information to provide better services to our users.
              The types of information we collect include:
              <br />
              <br />
              <strong>1.1 Personal Information:</strong> Information you provide
              directly to us, such as name, email address, phone number, and
              payment information (if applicable).
              <br />
              <br />
              <strong>1.2 Non-Personal Information:</strong> Automatically
              collected data, including IP address, browser type, operating
              system, and usage data (pages visited, time spent, etc.).
              <br />
              <br />
              <strong>1.3 Cookies and Tracking Technologies:</strong> We use
              cookies to enhance user experience and analyze Website usage. You
              can manage cookie preferences through your browser settings.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl mb-3 font-bold">
              2. How We Use Your Information
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              We use your information for purposes such as:
              <ul className="list-disc ml-5 mt-3">
                <li>Providing and maintaining the Website.</li>
                <li>Personalizing your experience on our Website.</li>
                <li>Responding to inquiries and providing customer support.</li>
                <li>
                  Analyzing and improving services and Website functionality.
                </li>
                <li>
                  Sending promotional or informational emails (with your
                  consent).
                </li>
              </ul>
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl mb-3 font-bold">
              3. Sharing Your Information
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              We do not sell or rent your personal information. We may share
              information with:
              <ul className="list-disc ml-5 mt-3">
                <li>Service providers for hosting or payment processing.</li>
                <li>
                  Legal authorities if required by law or to protect rights.
                </li>
                <li>Business transfers in the event of a merger or sale.</li>
              </ul>
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl mb-3 font-bold">
              4. Security of Your Information
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              We implement a variety of security measures to ensure the safety
              of your personal information. However, no method of transmission
              over the internet is 100% secure. Please use caution when sharing
              sensitive data online.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl mb-3 font-bold">5. Your Rights</h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Depending on your location, you may have rights such as:
              <ul className="list-disc ml-5 mt-3">
                <li>Accessing and obtaining a copy of your personal data.</li>
                <li>Correcting or updating inaccurate information.</li>
                <li>Requesting the deletion of your data.</li>
                <li>
                  Restricting or objecting to certain data processing
                  activities.
                </li>
              </ul>
              To exercise these rights, contact us at hello@virlama.com
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl mb-3 font-bold">6. Children's Privacy</h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Our Website is not intended for children under the age of 13. We
              do not knowingly collect personal information from children. If we
              become aware that a child under 13 has provided personal data, we
              will delete it immediately.
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl mb-3 font-bold">
              7. Third-Party Links and Services
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Our Website may contain links to third-party websites. We are not
              responsible for the privacy practices of these third-party
              services. Please review their policies before providing any
              information.
            </p>

            {/* Section 8 */}
            <h2 className="text-2xl mb-3 font-bold">
              8. Updates to This Privacy Policy
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with the updated effective date. Please review
              this policy regularly to stay informed about how we are protecting
              your information.
            </p>

            {/* Section 9 */}
            <h2 className="text-2xl mb-3 font-bold">9. Contact Us</h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at hello@virlama.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
