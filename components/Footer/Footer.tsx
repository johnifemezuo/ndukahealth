/* eslint-disable @next/next/no-html-link-for-pages */
import { ScrollReveal } from "../Animation";
import { EmailIcon } from "../Icons/EmailIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { MapIcon } from "../Icons/MapIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { Container } from "../layout/Container";
import { Logo } from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="bg-green-100 relative z-30 relative px-4 lg:px-0 lg:pt-20 pt-12 pb-6 lg:pb-12 mt-12 rounded-3xl">
      <Container>
        <div className="lg:flex justify-between items-center">
          {/* Left Section */}
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="lg:w-56 w-44 h-32">
              <Logo />
              </div>

              <p className=" text-gray-700 mt-5">
                Nduka Health Limited Registered in England & Wales
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social Media Icons */}
                {/* <a
                  href="#"
                  className="text-gray-600 hover:text-green-600"
                  target="_blank"
                >
                  <FacebookIcon />
                </a> */}
                <a
                  href="https://x.com/ndukahealth"
                  className="text-gray-600 hover:text-green-600"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/nduka-health"
                  className="text-gray-600 hover:text-green-600"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>
                {/* <a
                  href="#"
                  className="text-gray-600 hover:text-green-600"
                  target="_blank"
                >
                  <InstagramIcon />
                </a> */}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="lg:flex justify-between lg:space-x-44 mt-8">
              {/* Middle Section */}
              {/* <div>
                <h3 className="text-gray-800 font-semibold text-lg">Company</h3>
                <ul className="mt-4 space-y-2 lg:space-y-4">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-green-600">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#About"
                      className="text-gray-600 hover:text-green-600"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#Feature"
                      className="text-gray-600 hover:text-green-600"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/#Testimonials"
                      className="text-gray-600 hover:text-green-600"
                    >
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </div> */}

              {/* Right Section */}
              <div className="mt-6 lg:mt-0 max-w-2xl">
                <ul className="mt-4 space-y-3 lg:space-y-3">
                  {/* <li className="flex items-center space-x-2">
                    <PhoneIcon />
                    <span className="text-gray-600">+234 534 5455</span>
                  </li> */}
                  <div className="space-y-2">
                    <h3 className="text-gray-700 font-medium text-lg">
                      Partnership
                    </h3>
                    <li className="flex items-center space-x-2">
                      <EmailIcon />
                      <span className="text-gray-600">
                        partnership@nduka.health
                      </span>
                    </li>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-gray-700 font-medium text-lg">
                      Press
                    </h3>
                  <li className="flex items-center space-x-2">
                    <EmailIcon />
                    <span className="text-gray-600">press@nduka.health</span>
                  </li>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-gray-700 font-medium text-lg">
                      Enquiries
                    </h3>
                    <li className="flex items-center space-x-2">
                    <EmailIcon />
                    <span className="text-gray-600">contact@nduka.health</span>
                  </li>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-gray-700 font-medium text-lg">
                      Address
                    </h3>
                    
                  <li className="flex space-x-2">
                    <MapIcon />
                    <span className="text-gray-600 max-w-xs">
                      71-75, Shelton Street, Covent Garden, London, WC2H 9JQ
                    </span>
                  </li>
                  </div>

                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 lg:mt-12 lg:px-12 rounded-2xl lg:rounded-full bg-white px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="mt-4 md:mt-0 text-center text-gray-600 text-sm">
            Copyright © 2024 Nduka Company. All rights reserved.
          </p>

          <div className="lg:flex space-x-4 lg:mt-0 mt-8 text-sm lg:text-base">
            <a
              href="privacy-policy"
              className="text-gray-600 hover:text-green-600"
            >
              Privacy Policy
            </a>
            <a
              href="terms-and-condition"
              className="text-gray-600 hover:text-green-600"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
